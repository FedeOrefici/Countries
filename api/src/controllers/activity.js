const { Activity, Country } = require('../db');

const createActivity = async (name, difficulty, duration, season, countries) => {
    const activity = await Activity.create({name, difficulty, duration, season});
    await activity.addCountries(countries) 
    return activity;
};

const getActivity = async () =>{
  const activity = await Activity.findAll({
    attributes: ["id", "name", "difficulty", "season", "duration"],
    through: { attributes: [] }
  })

  return activity;
}


module.exports = {createActivity, getActivity} 