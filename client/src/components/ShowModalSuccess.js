import { useEffect, useState } from 'react';
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

const Timer = styled.span`
    width: 30px;
    color: yellow;
`;



const ShowModalSuccess = () => {

    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const countdownInterval = setTimeout(() => {
        }, 3000)
        return () => {
            clearInterval(countdownInterval)
        }
    }, [countdown])

    useEffect(() => {
        if(countdown > 0){
            const countdownInterval = setInterval(() => {
                setCountdown((prevCount) => prevCount - 1)
            }, 1000);
            return () => {
                clearInterval(countdownInterval)
            }
        }
    }, [countdown])

  return (
    <Container>
        <Box>
          <span style={{color:'white'}} className="material-symbols-outlined">check_circle</span>
          <Text>Activity created</Text>
          <Text>you will be redirect in: <Timer>{countdown}</Timer></Text>
        </Box>
    </Container>
  )
}

export default ShowModalSuccess