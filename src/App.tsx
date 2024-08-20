import { useState } from "react";

import Navbar from "./component/Navbar";
import Theme from "./component/Theme";

const App = () => {
  const [theme, setTheme] = useState<boolean>(true);

  return (
    <main
      className={`theme-${
        theme ? "black" : "white"
      } bg-BG-main text-TX-main font-fontReg`}>
      {/* <button
        className={`w-[60px] h-[60px] rounded-full fixed top-2 right-2 flex justify-center items-center transition duration-[500ms] hover:opacity-80 shadow-${
          theme ? "dark" : "light"
        }`}
        onClick={() => setTheme(!theme)}>
        {theme ? "LT" : "DK"}
      </button> */}
      <Theme theme={theme} onToggle={() => setTheme(!theme)} />

      <Navbar />
      <section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        tenetur odit sunt vitae veritatis, tempora inventore, eaque ratione vel
        unde tempore aut voluptatem fugit eum possimus error quidem architecto.
        Voluptas laboriosam nam quia ipsum modi optio, hic laudantium inventore
        adipisci neque quisquam vitae impedit provident repellat, tenetur vero
        commodi quos?
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi est
        quidem ad assumenda qui beatae vel voluptatum quos at nemo ea, facilis
        quis enim error, rem ipsa fuga vitae in esse quam! Expedita fugiat
        corporis nesciunt optio velit voluptas ex, quas animi? Eligendi quis
        architecto reiciendis quaerat nostrum, vitae pariatur esse hic quae sed
        similique obcaecati consequatur. Iusto dolor nisi cumque nihil ratione
        praesentium assumenda vero veritatis architecto quia aspernatur, ex
        consequatur dolorum sapiente facere omnis illum magni inventore illo?
        Hic veniam non impedit facilis corrupti quos dolores, tempora
        accusantium distinctio voluptate mollitia deserunt voluptates laboriosam
        nesciunt sed? Animi et natus facilis, eum ullam qui omnis obcaecati
        deleniti quaerat id ab, sapiente excepturi adipisci quam iure. Ex,
        itaque consequuntur velit pariatur voluptate et beatae culpa fugit sed
        non, aut perspiciatis nam praesentium. Fugit fugiat adipisci non soluta,
        id nulla omnis. Cumque neque sint odit? Optio, iste officia itaque
        excepturi, ex perspiciatis incidunt, exercitationem distinctio
        voluptatum cum eligendi inventore nisi natus? Totam, aspernatur, sit
        reiciendis nemo expedita harum assumenda laudantium ipsum facilis
        dignissimos esse nostrum natus saepe! Sapiente ab, sint sequi et minima
        itaque voluptatum corrupti ratione inventore architecto distinctio
        voluptate quidem illo voluptatibus adipisci earum? Rem, incidunt rerum
        itaque officia earum temporibus illo eveniet expedita ab consequuntur
        soluta blanditiis reprehenderit architecto saepe facilis aliquam
        corrupti delectus quibusdam nobis magnam harum, laudantium voluptate
        odio placeat. Illo officiis minima harum libero eaque, architecto fuga
        fugit quisquam magnam est! Id libero natus porro tempore sint a quas
        alias reiciendis, voluptatem quo debitis ipsam iure earum, molestias
        deleniti qui sit? Molestias, ab? Animi hic similique molestias repellat
        quia, accusamus tempora. Minus sequi cum facere provident dolorum? Illum
        in veniam numquam aut omnis, quod recusandae quisquam minima itaque.
        Possimus tempora, nemo delectus eos cumque atque porro dolorem iusto
        dolor excepturi asperiores animi ducimus nam quas.
      </p>
    </main>
  );
};

export default App;
