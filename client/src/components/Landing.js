import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from '../img/logo.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  gap: 50px;
`;

const ContainerImg = styled.img`
  width: 5%;
`;

const Text = styled.p`
  ::after {
    content: '';
    height: 1px;
    width: 0%;
    background-color: #00FF66;
    display: block;
    transition: width 0.3s ease-in-out;
  }

  :hover::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #00FF66;
    display: block;
  }
`;


const Landing = () => {
  return (
    <Container>
      <ContainerImg src={logo} />
      <Text>
        <Link style={{color:'white', textDecoration:'none'}} to='/countries'>START</Link>
      </Text>
    </Container>
  )
}

export default Landing