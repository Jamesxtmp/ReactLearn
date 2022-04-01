import { useReducer, useState } from "react"

//state: offset
//action: { type: string, payload: any }
const offset = { contador: 0 }
const reducer = ( state, action ) => {
    switch ( action.type ) {
        case 'increment':
            return { contador: state.contador + 1 }

        case 'decrement':
            return { contador: state.contador - 1 }

        case 'set':
            return { contador: action.payload }
            
        default:
            return state
    }
}
const App = () => {
    const [ state, dispatch ] = useReducer( reducer, offset )
    const [ contValue, setContValue ] = useState(0)
    return(
        <div>
            <h1>{ state.contador }</h1>
            <button onClick={ () =>  dispatch({ type: 'increment' }) } >+</button>
            <button onClick={ () =>  dispatch({ type: 'decrement' }) } >-</button>  <br/>
            <input type="number" onChange={ e => setContValue( e.target.value ) } ></input>
            <button onClick={ () =>  dispatch({ type: 'set', payload: contValue }) } >set</button>
        </div>
    )
}
export default App