import { useRef } from 'react'

const useFormPeople = ( handleRegistros ) => {
    const nombre = useRef()
    const apellido = useRef()
    const email = useRef()

    const clearInputs = () => {
        nombre.current.value = ""
        apellido.current.value = ""
        email.current.value = ""
    }
    const submitData = () => {
        if( nombre.current.value && apellido.current.value && email.current.value ){
            handleRegistros({
                nombre: nombre.current.value,
                apellido: apellido.current.value,
                email: email.current.value
            })
            clearInputs()
        }else{
            alert( 'Llena todos los campos' )
        }
    }
    return {
        nombre,
        apellido,
        email,
        submitData
    }
}
export default useFormPeople