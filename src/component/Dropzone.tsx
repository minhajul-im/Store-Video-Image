import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";

import Button from "./Button";
import Heading from "./Heading";
import Extension from "./Extension";
import Loading from "./loading/Loading";
import WithOutDrag from "./WithOutDrag";
import PreviewFiles from "./PreviewFiles";
import Dragging from "./dragging/Dragging";
import RejectedFiles from "./RejectedFiles";
// import ClipboardCopy from "./ClipboardCopy";
import { CLOUD_NAME, BASE_URL } from "../constant";

interface FileWithPreview extends File {
  preview: string;
}

const Dropzone = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [rejected, setRejected] = useState<FileRejection[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles.length > 0) {
        setFiles((previousFiles: FileWithPreview[]) => [
          ...previousFiles,
          ...acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          ),
        ]);
      }

      if (rejectedFiles.length > 0) {
        setRejected((previousRejected) => [
          ...previousRejected,
          ...rejectedFiles,
        ]);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 3 * 1000,
    onDrop,
  });

  const handleRemove = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const handleRejected = (name: string) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (files.length === 0) return;

    try {
      setLoading(true);
      const formData = new FormData();
      files.forEach((file) => formData.append("file", file));
      formData.append("upload_preset", "myCloud");
      formData.append("cloud_name", CLOUD_NAME);

      const res = await fetch(BASE_URL, { method: "POST", body: formData });

      if (res.status === 200) {
        const result = await res.json();

        setUrls((prevUrls) => [...prevUrls, result?.secure_url]);

        setLoading(false);
        console.log(result);
      }
    } catch (err) {
      console.log("ERROR FROM UPLOAD", err);
    }
  };

  return (
    <section className="py-4">
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <form onSubmit={handleUpload}>
            <Heading>Upload Files</Heading>
            <div
              {...getRootProps({
                className: `flex-1 flex flex-col items-center p-3 border-2 border-dotted border-gray-300 rounded-lg drag-area cursor-pointer`,
              })}>
              <input {...getInputProps()} />

              {isDragActive ? <Dragging /> : <WithOutDrag />}
              <Extension />
            </div>
            <Button count={files?.length} />
          </form>

          {files?.length > 0 && (
            <PreviewFiles onRemove={handleRemove} files={files} />
          )}

          {rejected?.length > 0 && (
            <RejectedFiles rejected={rejected} onRejected={handleRejected} />
          )}

          {/* {urls?.length > 0 && <ClipboardCopy urls={urls} />} */}
        </React.Fragment>
      )}
    </section>
  );
};

export default Dropzone;
