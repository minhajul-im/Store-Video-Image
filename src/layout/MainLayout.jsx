import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import store from "../app/store";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <Provider store={store}>
      {/* <Navbar /> */}
      <Outlet />
    </Provider>
  );
}
