import { useState } from "react"
import { Formik } from "formik"
import { WrapForm, FormSC, SubmitButton, Ans } from './styledRules'
import ImputCustom from './components/InputCustom'
import usevalidate from "./hooks/useValidate"
import calculos from './hooks/calculos'

const App = () => {
    const [ ans, setAns ] = useState(0)
    return(
        <WrapForm>
            <Formik
                initialValues={{
                    inicial: '',
                    anual: '',
                    interes: '',
                    anios: '',
                }}
                validate={ usevalidate }
                onSubmit={ ( values, { resetForm } ) => {
                    resetForm()
                    setAns( calculos( values ) )
                }}
            >
                <FormSC>
                    <ImputCustom
                        name={ "inicial" }
                        title={ "Importe inicial" }
                        simbol={ "$" }
                        type="number"
                        placeholder={ "100.00" }
                    ></ImputCustom>
                    <ImputCustom
                        name={ "anual" }
                        title={ "Anualidades de" }
                        simbol={ "$" }
                        type="number"
                        placeholder={ "100.00" }
                    ></ImputCustom>
                    <ImputCustom
                        name={ "interes" }
                        title={ "Con interes del" }
                        simbol={ "%" }
                        type="number"
                        placeholder={ "100" }
                    ></ImputCustom>
                    <ImputCustom
                        name={ "anios" }
                        title={ "Cantidad de anios" }
                        simbol={ "" }
                        type="number"
                        placeholder={ "100" }
                    ></ImputCustom>
                    
                    <SubmitButton type="submit">Submit</SubmitButton>
                    {
                        ans
                        ? <Ans>{ `$ ${ans}` }</Ans>
                        : null
                    }
                </FormSC>
            </Formik>
        </WrapForm>
    )
}
export default App