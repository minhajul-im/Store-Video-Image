import { useState } from "react";
import Theme from "./component/Theme";
import Dropzone from "./component/Dropzone";

const App = () => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <main
      className={`theme-${
        theme ? "black" : "white"
      } bg-BG-main text-TX-main font-fontReg h-screen`}>
      <section className="container">
        <Theme theme={theme} onToggle={() => setTheme(!theme)} />

        <Dropzone />
      </section>
    </main>
  );
};

export default App;
