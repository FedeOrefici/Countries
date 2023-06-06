import { useDispatch, useSelector } from "react-redux"
import { filter } from "../redux/actions"
import { useEffect, useState } from "react";
import { getCountries, getActivities } from "../redux/actions";
import styled from "styled-components";
import background from '../img/world.jpg'

const Container = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 600px;
    margin-top: 60px;
    margin-right: 40px;
    height: 1080px;
    border: 1px solid #bfbfbf;
`;


const Title = styled.h2`
    color: #00FF66;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

const Par = styled.p`
    font-size: 20px;
`;

const Select = styled.select`
    width: 350px;
    height: 35px;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid #01F162;
    margin-top: 30px;
`;

const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

const Button = styled.button`
    color: black;
    width: 200px;
    height: 40px;
    background-color: #01F162;
    text-transform: uppercase;
    margin-top: 100px;
    border: none;
    cursor: pointer;
    :hover {
        background-color: #00db58;
    }
`;

const Option = styled.option`
    height: 50px;
    color: white;
    background-color: rgba(0,0,0,0.9);
`;

const Filters = () => {

    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);
    const allCountries = useSelector((state) => state.allCountries)

    const [order, setOrder] = useState('')
    const [orderContinent, setOrderContinent] = useState('')
    const [orderActivities, setOrderActivities] = useState('')
    
    useEffect(()=> {
        handleOrder()
    }, [order, orderContinent, orderActivities])

    const handleOrder = () => {
        let countries = [...allCountries]
        if(orderContinent !== '') countries = countries.filter((cnt) => cnt.continent === orderContinent)
        if(orderActivities !== '') {
            if(orderActivities === 'all'){
                countries = countries.filter((cnt) => cnt.Activities.length > 0)
            } else {
                countries = countries.filter((cnt) => cnt.Activities.find((act) => act.name === orderActivities))
            }
        }
        if(order === 'upward') countries = countries.sort((a, b) => a.name.localeCompare(b.name)) 
        if(order === 'downward') countries = countries.sort((a, b) => b.name.localeCompare(a.name))
        if(order === 'low') countries = countries.sort((a, b) => a.population - b.population)
        if(order === 'high') countries = countries.sort((a, b) => b.population - a.population)
        dispatch(filter(countries))  
    }

    const handleResetFilter = (event) => {
        setOrderContinent('');
        setOrderActivities('');
        setOrder('');
        dispatch(getCountries(event.target.value))
        dispatch(getActivities(event.target.value))
      };


  return (

    <Container>
        <Title>
            <span className="material-symbols-outlined">arrow_right</span>
            <Par>filters</Par>
        </Title>

        <ContainerSelect>

        <Select value={order} onChange={(event) => setOrder(event.target.value)}>
            <Option disabled='disabled' selected='selected' value=''>Select order</Option>
            <Option value=''>default</Option>
            <Option value='upward'>A - Z</Option>
            <Option value='downward'>Z - A</Option>
            <Option value='high'>High population</Option>
            <Option value='low'>Low population</Option>
        </Select>

        <Select value={orderContinent} onChange={(event) => setOrderContinent(event.target.value)}>
            <Option value=''>Continents</Option>
            <Option value='Africa'>Africa</Option>
            <Option value='Asia'>Asia</Option>
            <Option value='Americas'>Americas</Option>
            <Option value='Europe'>Europe</Option>
            <Option value='Oceania'>Oceania</Option>
        </Select>

        <Select value={orderActivities} onChange={(event) => setOrderActivities(event.target.value)}>
            <Option disabled='disabled' selected='selected'>select activity</Option>
            <Option value='all'>Activities</Option>
            {activities?.map((activity) => (
                <Option value={activity.name} key={activity.id}>{activity.name}</Option>
            ))}
        </Select>

        </ContainerSelect>

        <Button onClick={handleResetFilter}>clean All</Button>
        
        <div style={{marginTop:'500px'}}>
            <p style={{color:'white', fontWeight:'bold'}}>SITE BY <span style={{color:'#00FF66', fontWeight:'bold'}}>FEDERICO OREFICI</span></p>
        </div>

    </Container>

  )
}

export default Filters;