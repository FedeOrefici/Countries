import styled from "styled-components"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "../redux/actions";
import { useState } from "react";

const ContainerCards = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.h1`
    color: #00FF66;
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


const Error = ({handleResetValue}) => {


    const dispatch = useDispatch();
    
    const handleResetFilter = () => {
        dispatch(getCountries())
        dispatch(getActivities())
        handleResetValue()
      };

  return (
    <ContainerCards>
        <Text>
            No countries Found
        </Text>
        <Link to='/countries'>
            <Button onClick={handleResetFilter}>back</Button>
        </Link>
    </ContainerCards>
  )
}

export default Error