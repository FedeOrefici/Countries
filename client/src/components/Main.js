import { clearCountryDetail } from "../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import styled from "styled-components";
import Card from "./Card";
import Error from "./Error";
import Loader from "./Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const ContainerCards = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  justify-items: center;
  box-sizing: border-box;
`;


const Main = ({countries}) => {

  const dispatch = useDispatch();

  const [value, setValue] = useState('');


  useEffect(() => {
    dispatch(clearCountryDetail())
  }, [])

  const handleResetValue = () => {
    setValue('');
  };


  return (
    <>
        <SearchBar countries={countries} setValue={setValue} />
          {(countries.length === 0) ? (
            <Error handleResetValue={handleResetValue} />
          ) : (
        <Container>  
          <Filters />
          {(!countries ? <Loader /> : (
            <ContainerCards>
              <Card countries={countries} />
            </ContainerCards>
          ))}
        </Container>
          )}
    </>
  )
}

export default Main