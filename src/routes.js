import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Error } from "./pages/error/index";
import { AboutUs } from "./pages/AboutUs/index";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route path="/sobreNos" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
