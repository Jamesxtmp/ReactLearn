const usevalidate = values => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = 'Requerido';
    } else if (values.nombre.length > 15) {
        errors.nombre = 'No puede tener mas 15 caracteres';
    }
    
    if (!values.email) {
        errors.email = 'Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Formato invalido';
    }

    if (!values.contrasena) {
        errors.contrasena = 'Requerido';
    } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,1000}$/.test(values.contrasena)) {
        errors.contrasena = '(MAYUSCULAS), (minusculas) y numeros (123)';
    }
  
    return errors;
}
export default usevalidate