import '../css/Registros.css'

const Registros = ({ registros }) => {
    return(
        <div className='wrapRegistros'>
            <h4> --Registros-- </h4>
            {
                registros.map( registro => 
                    <p key={ registro.email } >{
                        `${registro.nombre} ${registro.apellido} - ${registro.email}`
                    }</p>
                )
            }
        </div>
    )
}
export default Registros