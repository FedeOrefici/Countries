import { Link } from "react-router-dom";
import styled from "styled-components";
import background from '../img/world.jpg'

const Container = styled.div`
    display: grid;
    width: 500px;
    height: 200px;
    border: 1px solid #bfbfbf;
    margin-top: 10px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
    background-size: cover;
    background-position: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: 50% 50%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.03)
    }
`;

const ContP = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
    margin-right: 100px;
    padding: 10px;
    text-align: center;
`;

const Image = styled.img`
    width: 25%;
    height: 30%;
    border-radius: 50%;
    border: 3px solid white;
    overflow: hidden;
`;

const Continent = styled.p`
    color: #00FF66;
    font-size: 14px;
`;

const Text = styled.h2`
    font-weight: 600;
    margin-top: 10px;
`;

const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 10px;
    width: 200px;
    gap: 5px;
`;

const BoxActivities = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    bottom: 10px;
`;



const Card = ({countries}) => {

    const colors = {
        green : 'green',
        red: 'red'
    }
   
  return (
    <>
      {countries && countries.map((cnt) => (
        <Link style={{color: 'white', textDecoration:'none'}} to={`/countries/${cnt.id}`}>
            <Container key={cnt.id}>
                <Image src={cnt.flag} />
                <ContP>
                    <Icon>
                        <span style={{width:'10px', color:'#00FF66', fontSize:'14px'}} className="material-symbols-outlined">arrow_right</span>
                        <Continent>{cnt.continent}</Continent>
                    </Icon>
                    <Text>{cnt.name.slice(0,20)}</Text>
                    <BoxActivities>
                        <p>Activities:</p>
                        <span style={{color: cnt.Activities.length > 0 ? colors.green : colors.red, fontSize:'15px'}} className="material-symbols-outlined">radio_button_checked</span>
                    </BoxActivities> 
                </ContP>
            </Container>
        </Link>
    ))}
    </>
  )
}

export default Card