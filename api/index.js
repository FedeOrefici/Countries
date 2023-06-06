const axios = require('axios');
const server = require('../api/src/app.js');
const { conn } = require('../api/src/db.js');
const { Country } = require('../api/src/db.js');

conn.sync({ force: true }).then(async () => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001');

    // Verificar si ya existen registros en la tabla
    const count = await Country.count();
    if (count === 0) {
      try {
        // Obtener los datos de la API
        const response = await axios.get('https://rest-countries.up.railway.app/v2/all');
        const countries = response.data;
        // Mapear los datos y crear los registros en la base de datos
        const allCountries = countries.map((country) => ({
          id: country.alpha3Code,
          name: country.name,
          flag: country.flags.png,
          continent: country.region,
          capital: country.capital || '',
          population: country.population || 0,
        }));
        
        // Crear los registros en la base de datos
        await Country.bulkCreate(allCountries);

        console.log('Data loaded successfully');
      } catch (error) {
        console.error('Error loading data:', error.message);
      }
    }
  });
});