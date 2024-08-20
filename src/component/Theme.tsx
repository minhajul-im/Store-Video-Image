import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

type Theme = { theme: boolean; onToggle: () => void };

const Theme = ({ theme, onToggle }: Theme) => {
  return (
    <button
      className={`w-[50px] h-[50px] rounded-full fixed top-2 right-2 flex justify-center items-center transition duration-[500ms] hover:opacity-80 shadow-${
        theme ? "dark" : "light"
      }`}
      onClick={onToggle}>
      {theme ? <Moon theme={theme} /> : <Sun theme={theme} />}
    </button>
  );
};

export default Theme;
