import { getActivities, getCountries } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import { Routes, Route, useLocation } from 'react-router-dom';
import Detail from './components/Detail';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Form from './components/Form';
import Pagination from './components/Pagination';
import styled from 'styled-components';

const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



function App() {

  const countries = useSelector((state) => state.copyCountries)
  const dispatch = useDispatch();
  const location = useLocation();

  //pagination
  const[page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const idxLast = page * perPage;
  const idxFirst = idxLast - perPage;
  const currentCnt = countries.slice(idxFirst, idxLast)
  const max = Math.ceil(countries.length / perPage);
  //end Pagination


  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, []);

  useEffect(() => {
    setPage(1)
  }, [countries])

  console.log(value, 'aca value');
 
  return (
    <>
      {(location.pathname === '/') 
      ? (<Landing />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path='/countries' element={
            <ContainerMain>
              <Main countries={currentCnt} setPage={setPage} /> 
              <Pagination page={page} setPage={setPage} countries={countries} max={max}  />
            </ContainerMain>
            } />
            <Route path='/countries/:id' element={<Detail />} />
            <Route path='/create' element={<Form />} />
          </Routes>
        </>
      ) }
    </>
  );
}

export default App;
