import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Clientes from "./components/pages/Clientes";
import NovosClientes from "./components/pages/NovosClientes";
import EditarCliente from "./components/Clientes/EditarCliente";
import Contatos from "./components/pages/Contatos";
import Livros from "./components/pages/Livros";
import NovosLivros from "./components/pages/NovosLivros";
import EditarLivro from "./components/Livros/EditarLivro";

import Container from "./components/layouts/Container";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/clientes">
            <Clientes />
          </Route>
          <Route exact path="/livros">
            <Livros />
          </Route>
          <Route exact path="/contatos">
            <Contatos />
          </Route>
          <Route exact path="/novoslivros">
            <NovosLivros />
          </Route>
          <Route exact path="/editarlivro/:id">
            <EditarLivro />
          </Route>
          <Route exact path="/novosclientes">
            <NovosClientes />
          </Route>
          <Route exact path="/editarcliente/:id">
            <EditarCliente />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
