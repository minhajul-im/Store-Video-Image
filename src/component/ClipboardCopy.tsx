import { useState } from "react";
import Heading from "./Heading";

const ClipboardCopy = ({ urls }: { urls: string[] }) => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    });
  };

  return (
    <section>
      <Heading>Copy All URL</Heading>
      {urls.map((url) => (
        <div
          key={url}
          className="relative bg-BG-main border border-gray-300 rounded-lg p-4 my-4">
          <p className="break-words text-blue-600">{url}</p>
          <button
            onClick={() => handleCopy(url)}
            className="absolute top-3.5 right-3.5 px-3 py-1 bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all">
            {copiedUrl === url ? "Copied!" : "Copy"}
          </button>
        </div>
      ))}
    </section>
  );
};

export default ClipboardCopy;
