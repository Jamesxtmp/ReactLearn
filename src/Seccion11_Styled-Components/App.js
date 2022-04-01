import styled from "styled-components"

//      Normal
//!     Error
//?     Incognita
////    Eliminado
//todo  Tarea
//*     Importante
//#     Custom

const P = styled.p`
    color: red;
`
const Secction = styled.section`
    background-color: #000000dd;

`

const App = () => {
    return(
        <main>
            <Secction>
                <P>P styled</P>

            </Secction>
        </main>
    )
}
export default App