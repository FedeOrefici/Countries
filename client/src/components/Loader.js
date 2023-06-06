import styled from "styled-components"

const Loading = styled.div`
  background-color: #2b375c;
  color: white;
  height: 100vh;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 100px;
  height: 100px;
  border: solid 5px #a30f4a;
  border-top: solid 5px #a3496d;
  border-radius: 50%;
  animation: loader .8s linear infinite;

  @keyframes loader {
      0% {transform: rotate(80deg)}
      100%{transform: rotate(360deg)}
  }

`
const TextLoading = styled.p`
  display: flex;
  text-transform: uppercase;
  position: absolute;
  
`

const Loader = () => {
  return (
    <Loading>
      <TextLoading>Loading...</TextLoading>
      <Container />
    </Loading>
  )
}

export default Loader