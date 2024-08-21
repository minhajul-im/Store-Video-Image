import React from "react";
import Heading from "./Heading";

interface FileError {
  code: string;
  message: string;
}

interface RejectedFile {
  file: File;
  errors: FileError[];
}

interface RejectedFilesProps {
  rejected: RejectedFile[];
  onRejected: (fileName: string) => void;
}

const RejectedFiles: React.FC<RejectedFilesProps> = ({
  rejected,
  onRejected,
}) => {
  return (
    <section className="border-b border-dotted">
      <Heading>Rejected Files</Heading>

      <ul className="mb-4 flex flex-col">
        {rejected.map(({ file, errors }) => (
          <li key={file.name} className="flex items-center justify-between">
            <div>
              <p className="mt-2 text-neutral-500 text-sm font-medium">
                {file.name}
              </p>
              <ul className="text-[12px] text-red-400">
                {errors.map((error) => (
                  <li key={error.code}>{error.message}</li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-red-500 hover:text-white transition-colors duration-100"
              onClick={() => onRejected(file.name)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RejectedFiles;
