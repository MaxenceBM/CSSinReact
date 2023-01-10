import logo from './spidermax.jpg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import styled from 'styled-components';
import background from './background-spider.png';
import speed2 from './flash.png';
import power2 from './strong.png';


const Principale = styled.body`
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
`;
const Container = styled.div`
border:solid;
border-radius: 25px;
margin: auto;
background-image: url(${background});
width: 450px;
height: 600px;
`;

const Image = styled.img`
width: 200px;
display: flex;
margin: auto;
border: solid 5px red;
border-radius: 25px;
`;

const Title = styled.h1`
display:flex;
justify-content: center;
margin: 20px;
color: white;

`;

const Capacity = styled.h2`
text-align: center;
border: solid 5px red;
border-radius: 25px;
margin:60px 50px 60px 50px;
color: white;

`

const Speed = styled.li`
background-image: url(${speed2});
width: 50px;
height: 50px;
list-style:none;
display: flex;
margin-left:100px;

`
const Power = styled.li`
background-image: url(${power2});
width: 50px;
height: 50px;
list-style:none;
display:flex;
text-align: center;
margin-left:100px;
`


function App() {
  return (
    <Principale>
      <Container>
      <Title>SPIDERMAX</Title>
      <Image src={logo} alt='imagecard'></Image>
      <Capacity>CAPACITY
      <ul>
        
        <Speed></Speed> 
        
               
        <Power></Power>
        

      </ul> 
       </Capacity>
      </Container>
      
    </Principale>
  );
}

export default App;
