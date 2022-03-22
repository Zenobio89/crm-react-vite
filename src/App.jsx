import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VerCliente } from "./components/VerCliente";
import { Layout } from "./layout/Layout";
import { EditarCliente } from "./page/EditarCliente";
import { Inicio } from "./page/Inicio";
import { NuevoCliente } from "./page/NuevoCliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio></Inicio>} />
          <Route path="nuevo" element={<NuevoCliente></NuevoCliente>} />
          <Route path="editar/:id" element={<EditarCliente></EditarCliente>} />
          <Route path=":id" element={<VerCliente></VerCliente>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
