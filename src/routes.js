import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Error } from "./pages/error/index";
import { AboutUs } from "./pages/AboutUs/index";
import { Contact } from "./pages/contactUs/index";
import { Eletrica } from "./pages/elétrica/index";
import { Injecao } from "./pages/injeção/index";
import { Mecanica } from "./pages/mecanica/index";
import { Service } from "./pages/services/index";
import { useEffect } from "react";

function Router() {
  const location = window.location.pathname;

  console.log(location);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/sobreNos" element={<AboutUs />} />
        <Route path="/Contato" element={<Contact />} />
        <Route path="/Eletrica" element={<Eletrica />} />
        <Route path="/Injecao" element={<Injecao />} />
        <Route path="/Mecanica" element={<Mecanica />} />
        <Route path="/Servico" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
