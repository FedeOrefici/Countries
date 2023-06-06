import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryId } from "../redux/actions";
import styled from "styled-components";

const ContainerAll = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    width: 450px;
    height: 300px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    width: 60%;
    height: 100%;
`;

const ContParIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const BoxDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #242424;
    width: 200px;
    border: 1px solid #00FF66;
    padding: 5px;
`;


const ContId = styled.div`
    display: flex;
    background-color: #00FF66;
    color: black;
    width: 100px;
    height: 30px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    gap: 5px;
    position: relative;
    top: 50px;
`;

const Flag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
`;

const DivDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;



const Detail = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.countryDetail)

    useEffect(() => {
        dispatch(getCountryId(id))
    }, [])

  return (
    <ContainerAll>
        <Flag>
            <Img src={detail.flag} />
        </Flag>
      <Container>
            <ContId>
                <span className="material-symbols-outlined">badge</span>
                <p>{detail.id}</p>
            </ContId>
            <ContParIcon>
                <h1 style={{fontSize:'100px', textAlign:'center'}}>{detail.name}</h1>
            </ContParIcon>

            <DivDetails>
                <BoxDetails>
                    <span className="material-symbols-outlined">south_america</span>
                    <p>{detail.continent}</p>
                </BoxDetails>
                <BoxDetails>
                    <span className="material-symbols-outlined">location_on</span>
                    {detail.capital?.length === 0 ? <p style={{color:'yellow'}}>no capital available</p> : <p>{detail.capital}</p>}
                </BoxDetails>
                <BoxDetails>
                    <span className="material-symbols-outlined">groups</span>
                    <p>{detail.population}</p>
                </BoxDetails>
            </DivDetails>

        </Container>
    </ContainerAll>
  )
}

export default Detail