const {Router} = require('express');
const countryRouter = Router();
const {countriesHandler, idHandler} = require('../../handlers/country');


countryRouter.get('/', countriesHandler);
countryRouter.get('/:id', idHandler);


module.exports = countryRouter;