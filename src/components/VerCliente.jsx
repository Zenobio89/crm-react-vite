import { useParams } from "react-router-dom";
import { useFetchCliente } from "../hooks/useFetchCliente";
import { Spinner } from "./Spinner";

export const VerCliente = () => {
  const { id } = useParams();
  const { cliente, cargado } = useFetchCliente(id);
  const { nombre, email, telefono, empresa, notas } = cliente;
  return cargado ? (
    <Spinner></Spinner>
  ) : Object.entries(cliente).length === 0 ? (
    <p>No hay Resultados...</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        Ver Cliente: {nombre}
      </h1>
      <p className="mt-3">Información del Cliente...</p>
      <p className="text-4xl text-gray-600 mt-10">
        <span className="text-gray-800 uppercase font-bold">Cliente: </span>
        {nombre}
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="text-gray-800 uppercase font-bold">Email: </span>
        {email}
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="text-gray-800 uppercase font-bold">Teléfono: </span>
        {telefono}
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="text-gray-800 uppercase font-bold">Empresa: </span>
        {empresa}
      </p>
      {notas && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Notas: </span>
          {notas}
        </p>
      )}
    </div>
  );
};
