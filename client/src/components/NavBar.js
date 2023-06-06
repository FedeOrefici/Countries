import { Link } from "react-router-dom"
import logo from '../img/logo.png'
import styled from "styled-components";

const ContainerImg = styled.img`
  width: 5%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: px;
`;

const NavBar = () => {
  return (
    <Container>
        <ContainerImg src={logo} />
        <List>
            <Link to='/countries' style={{color:'white', textDecoration:'none', textTransform:'uppercase'}}>
            <IconText>
              <span style={{color:'#00FF66', fontSize:'15px'}} className="material-symbols-outlined">
                arrow_right
              </span>
              <p style={{fontSize:'13px', letterSpacing:'1px'}}>home</p>
            </IconText>
            </Link>

            <Link to='/create' style={{color:'white', textDecoration:'none', textTransform:'uppercase'}}>
            <IconText>
              <span style={{color:'#00FF66', fontSize:'15px'}} className="material-symbols-outlined">
                arrow_right
              </span>
              <p style={{fontSize:'13px', letterSpacing:'1px'}}>create activity</p>
            </IconText>
            </Link>

            <Link to='/' style={{color:'white', textDecoration:'none', textTransform:'uppercase'}}>
            <IconText>
              <span style={{color:'#00FF66', fontSize:'15px'}} className="material-symbols-outlined">
                arrow_right
              </span>
              <p style={{fontSize:'13px', letterSpacing:'1px'}}>exit</p>
            </IconText>
            </Link>

        </List>
    </Container>
  )
}

export default NavBar