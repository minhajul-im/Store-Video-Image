const Button = ({ count }: { count: number | undefined }) => {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        className={`py-2 px-6 rounded-lg border my-4 transition-all duration-150 ${
          count && count > 0
            ? "bg-gradient-to-r from-fuchsia-600 to-cyan-600 border-red-600 text-white"
            : "bg-gray-300 border-gray-400 cursor-not-allowed text-gray-500"
        }`}>
        Upload
      </button>
    </div>
  );
};

export default Button;
