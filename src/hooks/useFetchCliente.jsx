import { useEffect, useState } from "react";
import { obtenerClienteApi } from "../helpers";

export const useFetchCliente = (id) => {
  const [cliente, setCliente] = useState({});
  const [cargado, setCargado] = useState(true);
  useEffect(() => {
    obtenerClienteApi(id, setCliente);
    setTimeout(() => {
        setCargado(false)
    }, 2000);
  }, []);
  return { cliente, cargado };
};
