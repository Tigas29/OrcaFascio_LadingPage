import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Error } from "./pages/error/index";
import { AboutUs } from "./pages/AboutUs/index";
import { Contact } from "./pages/contactUs/index";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route path="/sobreNos" element={<AboutUs />} />
          <Route path="/Contato" element={<Contact />} />
          {/* <Route path="/teste" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
