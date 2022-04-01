import './app.css'
import FormPeople from './components/FormPeople.js'
import Registros from './components/Registros.js'
import { useState } from 'react'

const App = () => {
    const [ registros, setRegistros ] = useState([])
    const handleRegistros = ( people ) => {
        setRegistros([
            ...registros,
            people
        ])
    }
    console.log( registros )
    return(

        <div className='wrapApp' >
            <FormPeople
                handleRegistros={ handleRegistros }
            ></FormPeople>
            <Registros
                registros={ registros }
            ></Registros>
        </div>
    )
}
export default App