import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}`

const Container = styled.div`
background-image:url('https://i.ytimg.com/vi/HJDL2yR7ZhE/maxresdefault.jpg');
width:100%;
height:100vh;
background-position:center center;
background-size:cover;
display:Flex;
justify-content:center;
align-items:center;
flex-direction:column;`

const Power = styled.h3`
margin:3rem;`

const BtnsPart = styled.div`
display:flex;
width:20rem;
height:5rem;
align-items:center;
justify-content:space-evenly;`

const Btn = styled.button`
border-width:thin;
border-radius:10px;
color:gold;
background:green;
height:2rem;
width:4rem;`

  export default class App extends React.Component{

    state={
      number:0,
      text:'Veja o poder do GOKU alterando',
    }


    componentDidMount(){
      document.title='Qual o poder do GOKU?'
    }

    componentDidUpdate(){
      if (this.state.number < 8){
        document.title=`${this.state.number} de poder`
      }
      else{
        document.title=this.state.text
        this.setState({
         text:'Seu poder é mais de 8 MIL'
        })
      }
    }

    add =()=>{
      const Automatic = setInterval(()=>{
        this.setState((prevState)=>({
          number:prevState.number+1
        }));
      }, 1000);

      this.stop =()=>{
        clearInterval(Automatic);
      }
    }
    
    restart = () => {
      this.setState({ number:0 });
    };
    
    render(){
      return(
        <Container>
          <GlobalStyle />
          <h1>{this.state.text}</h1>
          <Power>{this.state.number}</Power>
          <BtnsPart>
            <Btn onClick={this.add}>+</Btn>
            <Btn onClick={this.stop}> STOP</Btn>
            <Btn onClick={()=>{this.restart()}}>RESET</Btn>
          </BtnsPart>
        </Container>

      )
    }
  }