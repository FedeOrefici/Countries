const {Router} = require('express');
const countryRouter = Router();
const {getDataHandler} = require('../../handlers/getDataHandler');

countryRouter.get('/', getDataHandler);

module.exports = countryRouter;