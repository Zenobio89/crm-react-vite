import { useEffect,useState } from 'react'
import { obtenerClientesApi } from '../helpers';

export const useFetchApi = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    obtenerClientesApi(setClientes)
  }, []);
  return [clientes,setClientes]
}
