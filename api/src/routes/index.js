const { Router } = require('express');
const countryRouter = require('./country/countryIndex');
const activityRouter = require('./activity/activityIndex');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRouter);
router.use('/activities', activityRouter);


module.exports = router;
