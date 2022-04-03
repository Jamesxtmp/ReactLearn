import styled from "styled-components"
import {  Form, Field, ErrorMessage } from "formik"


const WrapForm = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
//_ const FormikSC = styled( Formik )`
//_     El Componente Formik no requerie estilos
//_ `
const FormSC = styled( Form )`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 30px;
    box-shadow: 0 0 2px 2px #0000003b;
`
const SubmitButton = styled.button`
    border: none;
    background-color: #9dc4e2;
    border-radius: 8px;
    margin-top: 10px;
    padding: 3px 0;
    width: 100%;
`
const FieldSC = styled( Field )`
    border-radius: 6px;
    display: inline-block;
    margin: 5px 0;
    outline: none;
    width: 90%;
    padding: 2px 5px;
`
const Simbol = styled.div`
    display: inline-block;
    width: 10%;
`
const ErrorMessageSC = styled( ErrorMessage )`
    position: relative;
    bottom: 5px;
    color: red;
`
const Ans = styled.div`
    display: inline-block;
    margin: 6px auto;
    font-size: 1.4em;
    color: #0adb92;
`

export {
    WrapForm,
    FormSC,
    SubmitButton,
    FieldSC,
    Simbol,
    ErrorMessageSC,
    Ans,
}