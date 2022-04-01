import { useState } from 'react'

const sendForm = (e) => {
    e.preventDefault()
    const dataForm = Object.fromEntries( Array.from( new FormData( e.target ) ) )
    console.log( dataForm )
}

const uncontrolledForm = () => {
    return(
        <div>
            <form onSubmit={ sendForm }>
                <input
                    type="text"
                    name='campo1'
                /><br/>
                <input
                    type="file"
                    name='campo2'
                /><br/>
                <textarea
                    name='campo3'
                /><br/>
                <button type='submit' >enviar</button>
            </form>
        </div>
    )
}

export default uncontrolledForm