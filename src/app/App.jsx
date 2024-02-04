import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import store from "./store";

import { Home, Movies, Signup, Login } from "../pages/index";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </Provider>
  );
};

export default App;
