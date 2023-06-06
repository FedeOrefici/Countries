const {countriesController, countriesControllerId} = require('../controllers/country');

const countriesHandler = async (req, res) =>{
    const {name} = req.query;
    try {
        if(name){
            const response = await countriesController(name)
            return res.status(200).json(response)
        }
        const allData = await countriesController()
        res.status(200).json(allData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

const idHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const idCountry = await countriesControllerId(id)
        res.status(200).json(idCountry)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {countriesHandler, idHandler};