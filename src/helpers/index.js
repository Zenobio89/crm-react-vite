import * as Yup from "yup";

export const agregarCliente = async (valores, navigate, cliente) => {
  try {
    let respuesta;
    if (cliente.id) {
      const url = `http://localhost:4000/clientes/${cliente.id}`;
      respuesta = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(valores),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const url = "http://localhost:4000/clientes";
      respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(valores),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    await respuesta.json();
    navigate("/clientes");
  } catch (error) {
    console.log(error);
  }
};

export const validarFormCliente = () => {
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El Nombre es muy corto...")
      .max(20, "El Nombre es muy largo...")
      .required("El nombre es Obligatorio..."),
    empresa: Yup.string().required("El nombre de la empresa es Obligatorio..."),
    email: Yup.string()
      .email("Email no válido...")
      .required("El email es Obligatorio..."),
    telefono: Yup.number()
      .integer("El numero debe ser entero...")
      .positive("El numero debe ser mayor a cero...")
      .typeError("El numero no debe ser caracter..."),
  });
  return nuevoClienteSchema;
};

export const obtenerClientesApi = async (setClientes) => {
  try {
    const url = "http://localhost:4000/clientes";
    const api = await fetch(url);
    const respuesta = await api.json();
    setClientes(respuesta);
  } catch (error) {
    console.log(error);
  }
};

export const obtenerClienteApi = async (id, setCliente) => {
  try {
    const url = `http://localhost:4000/clientes/${id}`;
    const api = await fetch(url);
    const respuesta = await api.json();
    setCliente(respuesta);
  } catch (error) {
    console.log(error);
  }
};
