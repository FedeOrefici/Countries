import { useDispatch } from "react-redux";
import { getCountryName } from "../redux/actions"
import styled from "styled-components";
import { useState } from "react";


const Container = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
  border: .5px solid #00FF66;
  width: 800px;
  height: 40px;
  padding-left: 20px;
  color: white;
`;

const SearchBar = () => {

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.value.trim();
    if (searchValue && /^[ A-Za-z\u00f1\u00d1]*$/g.test(searchValue)) {
      dispatch(getCountryName(searchValue));
    }
  }


  return (
    <form>
        <Container onChange={handleSubmit} type='search' placeholder="Type a country..." />
    </form>
  )
}

export default SearchBar