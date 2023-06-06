import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getActivities, getCountries, postActivity } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import validations from './formValidation';
import Modal from './Modal';
import styled from 'styled-components';
import ShowModalSuccess from './ShowModalSuccess';

const Container = styled.div`
    height: 100vh;
    display: flex;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    height: 100vh;
    padding: 50px;
    justify-content: space-around;
`;

const ContForm = styled.form`
   width: 50%;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
`;

const Button = styled.button`
    width: 250px;
    height: 40px;
    color: white;
    background-color: black;
    border: 1px solid #00FF66;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 40px;
    transition: all .5s ease;
    :hover {
        background-color: #00FF66;
        color: black;
    }
`;

const Input = styled.input`
    width: 350px;
    height: 35px;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid #01F162;
    margin-top: 30px;
    ::placeholder {
        color: gray;
    }
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

const Option = styled.option`
    height: 50px;
    color: white;
    background-color: rgba(0,0,0,0.9);
`;

const BtnClose = styled.button`
    border: 2px solid #00FF66;
    background-color: transparent;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
        background-color: #00FF66;
    }
`;

const ContCountry = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    background-color: #262626;
    height: 100px;
    border-top: 1px solid #00FF66;
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    padding: 15px;
    gap: 10px;
`;

const ContainerCountries = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5px;
    max-height: 800px;
    overflow-y: auto;
`;

const ContInputError = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100px;
`;


const Form = () => {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.allCountries);
    const activities = useSelector((state) => state.activities)
    const navigate = useNavigate();

    let difficulty = Array.from({length: 5}, (_, idx) => idx + 1);
    let duration = Array.from({length: 24}, (_, idx) => idx + 1);

    const [selectedCountries, setSelectedCountries] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const [data, setData] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    })

    const [errors, setErrors] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
        setErrors(validations({
            ...data,
            [event.target.name] : event.target.value
        }))
    }

    const handleCountrySelect = (event) => {
        const selectedCountryId = event.target.value;
        const selectCountry = countries.find((country) => country.id === selectedCountryId);
        const isCountrySelected = data.countries.includes(selectCountry.id);
        if(!isCountrySelected){
            setData((prevCheck) => ({...prevCheck, countries: [...prevCheck.countries, selectCountry.id]}));
            setSelectedCountries((prevSelected) => [...prevSelected, selectCountry])
        }
        if (selectedCountryId){
            setErrors((prevErrors) => ({...prevErrors, countries: ''}))
        }
    }

    const deleteCountrySelected = (countryId) => {
        const filtersCountries = data.countries.filter((cnt) => cnt !== countryId);
        setData((prevData) => ({...prevData, countries: filtersCountries}));
        const updateSelectCountries = selectedCountries.filter((cnt) => cnt.id !== countryId)
        setSelectedCountries(updateSelectCountries)
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validations(data);
        
        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
            setShowModal(true)
            return;
        }
        const activityName = data.name.toLocaleLowerCase()
        const exisitingActivity = activities.find((act) => act.name.toLowerCase() === activityName)
        if(exisitingActivity){
            setErrors({
                ...errors,
                name: 'This activity already exist'
            })
            return;
        }
        dispatch(postActivity(data))
        .then(() => {
            dispatch(getActivities())
            dispatch(getCountries())
            setData({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countries: [],
            })
        })
        setSelectedCountries([])
        setShowModalSuccess(true)
    }

    useEffect(() => {
        const time = setTimeout(() => {
            if (showModalSuccess) {
              navigate('/countries');
            }
        }, 3000);
        return () => {
            clearTimeout(time)
        }
      }, [showModalSuccess, navigate]);

    const closeModal = () => {
        setShowModal(false)
        setShowModalSuccess(false)
    }

  return (
    <Container>
        <ContForm onSubmit={handleSubmit}>
                <ContInputError>
                    <Input name='name' value={data.name} onInput={handleChange} type="text" placeholder='Write an Activity...' />
                    <span style={{color:'yellow', fontSize: '13px'}}>{errors && errors.name}</span>
                </ContInputError>
        
                <ContInputError>
                    <Select name='difficulty' value={data.difficulty} onChange={handleChange}>
                        <Option disabled='disabled' selected='selected' value=''>select difficulty</Option>
                        {difficulty.map((n, idx) =><Option key={idx}>{n}</Option>)}
                    </Select>
                        <span style={{color:'yellow', fontSize: '13px'}}>{errors && errors.difficulty}</span>
                </ContInputError>       
         
                <ContInputError>
                    <Select name='duration' value={data.duration} onChange={handleChange}>
                        <Option value='' disabled='disabled' selected='selected'>select duration</Option>
                        {duration.map((n, idx) =><Option key={idx}>{n}</Option>)}
                    </Select>
                    <span style={{color:'yellow', fontSize: '13px'}}>{errors && errors.duration}</span>
                </ContInputError>
          
            <ContInputError>
                <Select name='season' value={data.season} onChange={handleChange}>
                    <Option value='' disabled='disabled' selected='selected'>select season</Option>
                    <Option>Autumn</Option>
                    <Option>Winter</Option>
                    <Option>Spring</Option>
                    <Option>Summer</Option>
                </Select>
                <span style={{color:'yellow', fontSize: '13px'}}>{errors && errors.season}</span>
            </ContInputError>
          
            <ContInputError>
                <Select name='countries' onChange={handleCountrySelect}>
                    <Option value='' disabled='disabled' selected='selected'>select country</Option>
                    {countries.map(cnt => (<Option key={cnt.id} value={cnt.id}>{cnt.name}</Option>))}
                </Select>
                {errors.countries && <span style={{color:'yellow', fontSize: '13px'}}>{errors.countries}</span>}
            </ContInputError>

            <Button type='submit'>create</Button>

        </ContForm>
            <ContainerCountries>
                {selectedCountries.map((country, idx) => (
                    <ContCountry key={idx}>
                        <img style={{width:'40px'}} src={country.flag} />
                        <p style={{color:'white'}}>{country.name.slice(0,20)}</p>
                        <BtnClose type='button' onClick={() => deleteCountrySelected(country.id)}>
                            <span style={{color:'white', fontSize:'15px'}} className="material-symbols-outlined">close</span>
                        </BtnClose>
                    </ContCountry>     
                ))}
            </ContainerCountries>

        {showModalSuccess && <ShowModalSuccess />}
        {showModal && <Modal closeModal={closeModal} />}
    </Container>
  )
}

export default Form