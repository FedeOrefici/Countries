const {Router} = require('express');
const activityRouter = Router();
//HANDLERS
const {createActivityHandler, getActivityHandler} = require('../../handlers/activity');


activityRouter.post('/', createActivityHandler);
activityRouter.get('/', getActivityHandler);

module.exports = activityRouter;