import Heading from "./Heading";
import Cross from "../icons/Cross";

export interface FileWithPreview extends File {
  preview: string;
}

export type PropsType = {
  files: FileWithPreview[];
  onRemove: (name: string) => void;
};

const PreviewFiles = ({ files, onRemove }: PropsType) => {
  return (
    <section className="border-b border-dotted">
      <Heading>Accepted Files</Heading>
      <ul className="flex justify-center md:justify-start gap-6 flex-wrap mb-10">
        {files.map((file) => (
          <li
            key={file.name}
            className="relative h-[160px] w-[200px] bg-slate-300 rounded-md shadow-lg">
            <img
              src={file.preview}
              alt={file.name}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
              className="w-full h-full object-contain rounded-md"
            />
            <button
              type="button"
              className="w-7 h-7 border border-red-600 bg-red-100 rounded-full flex justify-center items-center absolute -top-3 -right-3 text-red-600 hover:bg-red-600 hover:border-white hover:text-white transition-all duration-100"
              onClick={() => onRemove(file.name)}>
              <Cross />
            </button>
            <p className="mt-2 text-neutral-500 text-[12px] font-medium">
              {file.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PreviewFiles;
