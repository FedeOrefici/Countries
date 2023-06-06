const validations = (data) => {
    let errors = {};

    if (!data.name) {
        errors.name = 'Name is required';
      } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*$/.test(data.name)) {
        errors.name = 'Invalid name';
      }
    
      if (!data.duration) {
        errors.duration = 'Duration is required';
      }
    
      if (!data.difficulty) {
        errors.difficulty = 'Difficulty is required';
      }
    
      if (!data.season) {
        errors.season = 'You must select a season';
      }

      if (data.countries.length === 0) {
        errors.countries = 'You must select at least one country'
      } 


      return errors;
    
    };


export default validations;