import "./App.css"
// npm i formik

// Sin componentes de formik
import { useFormik } from "formik"
import validate from './hooks/useValidate.js'

const FormSinFormikComponents = () => {
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            contrasena: '',
        },
        validate,
        onSubmit: ( values ) => {
            formik.handleReset()
            console.log( values )
        }
    })
    const { handleSubmit, handleChange, values, handleBlur } = formik
    return(
        <div className="wrap-form" >
            <form onSubmit={ handleSubmit } >
                <label htmlFor="nombre" >Nombre:</label>
                <input
                    placeholder="Nombre"
                    type="text"

                    name="nombre"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.nombre }
                />
                { formik.touched.nombre && formik.errors.nombre ? <div className="error" >{formik.errors.nombre}</div> : null}

                <label htmlFor="email" >Email:</label>
                <input
                    placeholder="correo@correo.com"
                    type="email"

                    name="email"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.email }
                />
                { formik.touched.email && formik.errors.email ? <div className="error" >{formik.errors.email}</div> : null}

                <label htmlFor="contrasena" >Contrasena:</label>
                <input
                    placeholder="contrasena"
                    type="password"

                    name="contrasena"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.contrasena }
                />
                { formik.touched.contrasena && formik.errors.contrasena ? <div className="error" >{formik.errors.contrasena}</div> : null}

                <button type="submit"> Enviar </button>
            </form>
        </div>
    )
}
export default FormSinFormikComponents