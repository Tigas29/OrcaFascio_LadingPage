import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Error } from "./pages/error/index";

function Router() {
  const location = window.location.pathname;

  console.log(location);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
