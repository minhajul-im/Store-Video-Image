import Upload from "../icons/Upload";

const WithOutDrag = () => {
  return (
    <>
      <Upload />
      <header className="my-6">
        <span className="drag-file">Click here</span> and
        <button className="px-2 mx-2 py-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full file-input-button cursor-pointer">
          select a file
        </button>
        from your device!
      </header>
    </>
  );
};

export default WithOutDrag;
