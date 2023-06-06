import styled from 'styled-components'

const Container = styled.div`
   position: fixed;
   z-index: 999;
   top: 0;
   left: 0;
   width: 100%;
   min-height: 100vh;
   background-color: rgba(0,0,0,0.75);
   display: flex;
`;

const Text = styled.p`
    color: white;
`;

const Box = styled.div`
  background-color: #3a3a3a;
  border: 1px solid #00FF66;
  width: 500px;
  height: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
    width: 250px;
    height: 40px;
    color: white;
    background-color: black;
    border: 1px solid #00FF66;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .5s ease;
    :hover {
        background-color: #00FF66;
        color: black;
    }
`;



const Modal = ({closeModal}) => {
  return (
    <Container>
        <Box>
          <span style={{color:'white'}} className="material-symbols-outlined">rule</span>
          <Text>All the fields must be completed</Text>
          <Button onClick={closeModal}>Cerrar</Button>
        </Box>
    </Container>
  )
}

export default Modal