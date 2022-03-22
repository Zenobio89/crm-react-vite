import React from "react";
import { useParams } from "react-router-dom";
import { FormNuevoCliente } from "../components/FormNuevoCliente";
import { useFetchCliente } from "../hooks/useFetchCliente";

export const EditarCliente = () => {
  const { id } = useParams();
  const { cliente, cargado } = useFetchCliente(id);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Utlizar este formulario para editar un cliente...</p>
      {cliente?.nombre ? (
        <FormNuevoCliente
          cliente={cliente}
          cargado={cargado}
        ></FormNuevoCliente>
      ): <p>Cliente para editar no Existe...</p> }
    </>
  );
};
