import { Cliente } from "../components/Cliente";
import { useFetchApi } from "../hooks/useFetchApi";

export const Inicio = () => {
  const [clientes, setClientes] = useFetchApi();
  const eliminarCliente = async (id) => {
    const confirmar = confirm("¿Deseas eliminar este cliente?");
    if (confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url, { method: "DELETE" });
        await respuesta.json();
        const arrayClientes = clientes.filter((cliente) => cliente.id !== id);
        setClientes(arrayClientes);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes...</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              {...cliente}
              eliminarCliente={eliminarCliente}
            ></Cliente>
          ))}
        </tbody>
      </table>
    </>
  );
};
