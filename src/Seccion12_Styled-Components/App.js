import styled, { keyframes } from 'styled-components'

//#     --- Simple Components
const Content = styled.div`
    background-color: #275ea5;
    display: inline-flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`
const Parrafo = styled.p`
    display: inline-block;
    color: #008000;
`
const Button = styled.button`
    border: none;
    border-radius: 8px;
    background-color: #228171;
    color: white;
    padding: 3px 5px;
`
//#     --- Pasar Props y className
const ButtonInteligent = styled.button`
    color: ${ ({ primary }) => primary ? "gold" : "gray" };
    border: 2px solid ${ ({ primary }) => primary ? "gold" : "gray" };
    background-color: white;
    border-radius: 8px;
    padding: 3px 5px;
    &.button-pink{
        color: pink;
        border: 2px solid pink;
    }
    &.button-green{
        color: green;
        border: 2px solid green;
    }
`
//#     --- Extender Components
const ParrafoExtend = styled( Parrafo )`
    border: 2px solid;
    background-color: #00800066;
    color: #008000;
`
//#     --- Applying style a custom component
const CustomComponent = props => <div { ...props } ></div>

const Box = styled( CustomComponent )`
    display: inline-block;
    background-color: white;
    border: 2px solid black;
    padding: 10px;
`
//#     --- Pseudo classes
const InterractiveButton = styled.button`
    transition: all 0.5s linear;
    border: 2px solid red;
    color: red;
    border-radius: 8px;
    background-color: white;
    padding: 3px 5px;
    
    &:hover{
        border: 2px solid #1f64e5;
        color: #1f64e5;
    }
`
//#     --- Animations and Keyframes
const girarFrames = keyframes`
    from{ transform: rotate(0deg); }
    to{ transform: rotate(360deg); }
`
const ParrafoAnimated = styled.p`
    display: inline-block;
    animation: ${ girarFrames }  2.5s linear infinite;
`


const App = () => {
    return(
        <div>
            <Content>
                <Parrafo>Simple Component Parrafo</Parrafo> <br/>
                <Button>Simple Button</Button>
            </Content>
            <br></br><br/>

            <ButtonInteligent>Comun Button</ButtonInteligent>
            <ButtonInteligent primary >Primary Prop</ButtonInteligent>
            <ButtonInteligent className='button-pink' >Class Pink Button</ButtonInteligent>
            <ButtonInteligent className='button-green' >Class Green Button</ButtonInteligent>
            <br></br><br/>

            <ParrafoExtend>Parrafo Extendido</ParrafoExtend>
            <br></br><br/>

            {/* //#     --- Change type node keeping its styles */}
            <ButtonInteligent primary as="span" >Span As Button </ButtonInteligent>
            <br></br><br/>

            <Box>Styling a custom component</Box>
            <br></br><br/>

            <InterractiveButton>Pseudo classes in a button</InterractiveButton>
            <br></br><br/>

            <ParrafoAnimated>Animation Rotate</ParrafoAnimated>
        </div>
    )
}
export default App