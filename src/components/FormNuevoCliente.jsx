import { Formik, Field, Form } from "formik";
import { agregarCliente, validarFormCliente } from "../helpers";
//import * as Yup from "yup";
import { Alerta } from "./Alerta";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";
//import { Children } from "react/cjs/react.production.min";

export const FormNuevoCliente = ({ cliente, cargado }) => {
  const navigate = useNavigate();
  const nuevoClienteSchema = validarFormCliente();
  return cargado ? (
    <Spinner></Spinner>
  ) : (
    <div className="bg-gray-400 mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h2 className="text-gray-600 font-bold text-xl uppercase text-center">
        {cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
      </h2>
      <Formik
        initialValues={{
          nombre: cliente?.nombre ?? "",
          empresa: cliente?.empresa ?? "",
          email: cliente?.email ?? "",
          telefono: cliente?.telefono ?? "",
          notas: cliente?.notas ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await agregarCliente(values, navigate,cliente);
          resetForm();
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          console.log(errors);
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">
                  Nombre:
                </label>
                <Field
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Ingrese el nombre del Cliente... "
                />
                {errors.nombre && touched.nombre && (
                  <Alerta>{errors.nombre}</Alerta>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="empresa">
                  Empresa:
                </label>
                <Field
                  type="text"
                  name="empresa"
                  id="empresa"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Ingrese la empresa del Cliente... "
                />
                {errors.empresa && touched.empresa && (
                  <Alerta>{errors.empresa}</Alerta>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Ingrese el email del Cliente... "
                />
                {errors.email && touched.email && (
                  <Alerta>{errors.email}</Alerta>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">
                  Telefono:
                </label>
                <Field
                  type="tel"
                  name="telefono"
                  id="telefono"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Ingrese el telefono del Cliente... "
                />
                {errors.telefono && touched.telefono && (
                  <Alerta>{errors.telefono}</Alerta>
                )}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notas">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  name="notas"
                  id="notas"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Notas del Cliente... "
                />
              </div>
              <input
                type="submit"
                value={cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
                className="mt-5 w-full bg-blue-800 p-2 rounded-md text-white font-bold uppercase text-lg hover:cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
FormNuevoCliente.defaultProps = {
  cliente: {},
  cargado: false
};
