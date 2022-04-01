import { useState } from 'react'

const useControlledForm = () => {
    const [state, setState] = useState({ 
        title: '',
        text: '',
        select: '',
        check: false,
        radio: 'gato'
    })
    const handle = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.name == 'check'
            ? e.target.checked
            : e.target.value
        })
    }
    return(
        <div>
            <div>
                <input
                        type="text"
                        name='title'
                        onChange={ handle }
                /><br/>
                <textarea
                    name='text'
                    onChange={ handle }
                /><br/>
                <select name='select' onChange={ handle } >
                    <option value="" >--select--</option>
                    <option value="azul" >azul</option>
                    <option value="amarillo" >amarillo</option>
                    <option value="rojo" >rojo</option>
                </select>
                <input
                    type="checkbox"
                    name='check'
                    onChange={ handle }
                />
                <div>
                    <input 
                        type="radio"
                        value="gato"
                        name="radio"
                        onChange={ handle }
                        checked={ state.radio == "gato" }
                    /> gato
                    <input 
                        type="radio"
                        value="perro"
                        name="radio"
                        onChange={ handle }
                        checked={ state.radio == "perro" }
                    /> perro
                    <input 
                        type="radio"
                        value="lobo"
                        name="radio"
                        onChange={ handle }
                        checked={ state.radio == "lobo" }
                    /> lobo
                </div>
            </div>
            text: <i>{ state.title }</i> <br/>
            text area: <i>{ state.text }</i> <br/>
            select:  <i>{ state.select }</i> <br/>
            checkbox:  <i>{ state.check ?'true' : 'false' }</i> <br/>
            radio:  <i>{ state.radio }</i> <br/>
            
        </div>
    )
}

export default useControlledForm