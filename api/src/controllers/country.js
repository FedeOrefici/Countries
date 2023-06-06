const {Country, Activity} = require('../db');

const countriesController = async (name) => {
    const databaseCountries = await Country.findAll({
        attributes: ["id", "name", "flag", "continent", "capital", "population"],
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
        }
    });
    if(name){
        let filterCountry = databaseCountries.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()))
        if(filterCountry.length){
            return filterCountry;
        }
    } else {
        return databaseCountries;
    }
}

const countriesControllerId = async (id) =>{
    const idCountry = await Country.findByPk(id.toUpperCase(), {
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
        }
    })
   
    return idCountry;
} 


module.exports = {countriesController, countriesControllerId};