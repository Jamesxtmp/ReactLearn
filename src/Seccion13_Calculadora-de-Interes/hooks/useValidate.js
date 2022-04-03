const usevalidate = values => {
    const errors = {};
    if (!values.inicial) {
        errors.inicial = 'Requerido';
    } else if ( values.inicial < 0 ) {
        errors.inicial = 'No puede ser negativo';
    }

    if (!values.anual) {
        errors.anual = 'Requerido';
    } else if (values.anual < 0) {
        errors.anual = 'No puede ser negativo';
    }
    
    if (!values.interes) {
        errors.interes = 'Requerido';
    } else if (values.interes < 0) {
        errors.interes = 'No puede ser negativo';
    }

    if (!values.anios) {
        errors.anios = 'Requerido';
    } else if (values.anios < 0) {
        errors.anios = 'No puede ser negativo';
    }
  
    return errors;
}
export default usevalidate