import { FieldSC, Simbol, ErrorMessageSC } from '../styledRules'

const ImputCustom = ({ name, simbol, title, ...inputProps }) => {
    return(
        <div>
            <label htmlFor={ name } >{ `${title}:` }</label><br/>
            <Simbol>{ `${simbol}  ` }</Simbol>
            <FieldSC 
                name={ name }
                { ...inputProps }
            />
            <ErrorMessageSC name={ name } component="div" className="error" ></ErrorMessageSC>
        </div>
    )
}
export default ImputCustom