import "./App.css"
// npm i formik

// Con componentes de formik
import { Formik, Form, Field, ErrorMessage } from "formik"
import validate from './hooks/useValidate.js'


const FormConFormikComponents = () => {
    return(
        <div className="wrap-form" >
            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    contrasena: '',
                }}
                validate={ validate }
                onSubmit={ ( values, { resetForm } ) => {
                    resetForm()
                    console.log( values )
                }}
            >
                <Form>
                    <label htmlFor="nombre">Nombre</label>
                    <Field
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                    />
                    <ErrorMessage name="nombre" component="div" className="error" />
            
                    <label htmlFor="email">Email</label>
                    <Field
                        name="email"
                        type="email"
                        placeholder="correo@correo.com"
                    />
                    <ErrorMessage name="email" component="div" className="error" />
            
                    <label htmlFor="contrasena">Contrasena</label>
                    <Field
                        name="contrasena"
                        type="password"
                        placeholder="contrasena"
                    />
                    <ErrorMessage name="contrasena" component="div" className="error" />
            
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default FormConFormikComponents