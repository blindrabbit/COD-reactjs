import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import login from "./pages/login";
import Authentication from "./pages/authentication";
import Dashboard from "./pages/dashboard";
import CadastroUser from "./pages/cadastroUser";
import Home from "./pages/home";
import Equip from "./pages/equip";
import Projects from "./pages/laboratorios";
import CadastroProject from "./pages/create_laboratory";
import List_image from "./pages/select_image";
import Pagina_de_Teste from "./pages/pagina_de_teste";
import VDI from "./pages/vdi";
import Contato from "./pages/contato";
import Info from "./pages/info";
import { CookiesProvider } from "react-cookie";

// DEFININDO AS ROTAS
// Também tenho as funções para chamar as páginas

const Rotas = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        {/* adicionar as rotas futuramente. exemplo abaixo*/}

        <Route component={List_image} path="/select_image" exact />
        <Route component={CadastroProject} path="/create_project" exact />
        <Route component={Projects} path="/projects" exact />
        <Route component={Equip} path="/equip" exact />
        <Route component={Home} path="/" exact />
        <Route component={CadastroUser} path="/cadastrouser" exact />
        <Route component={Dashboard} path="/dashboard" exact />
        <Route component={login} path="/login" exact />
        <Route component={Authentication} path="/authentication" exact />
        <Route component={Pagina_de_Teste} path="/Pagina_de_Teste" exact />
        <Route component={VDI} path="/vdi" exact />
        <Route component={Contato} path="/contato" exact />
        <Route component={Info} path="/info" exact />
      </BrowserRouter>
    </CookiesProvider>
  );
};

// ---------------------FLUXO DE ROTAS ------------------------
// A pagina index.html (na pasta public) tem uma div root
// Essa div busca o index.tsx dentro do src
// O index renderiza o app.tsx
// o APP.tsx busca o route.tsx
// E o route.tsx chaveia para a pagina que está na rota

export default Rotas;
