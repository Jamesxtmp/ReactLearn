import '../css/FormPeople.css'
import useFormPeople from '../hooks/useFormPeople.js'

const FormPeople = ( { handleRegistros } ) => {
    const { nombre, apellido, email, submitData } = useFormPeople( handleRegistros )

    return(
        <div className="wappFormPeople" >
            <input
                name="name"
                type="text"
                placeholder="Nombre"
                ref={ nombre }
            />
            <input
                name="apellido"
                type="text"
                placeholder="Apellido"
                ref={ apellido }
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                ref={ email }
            />
            <button
                onClick={() => submitData() }
            >Subir</button>
        </div>
    )
}
export default FormPeople