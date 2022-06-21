export default function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Activity name required';
   
    } else if (!/^(?=.{3,13}$)[a-zA-Z]+$/.test(input.name)) {
      errors.name = 'Activity name is invalid, must contain only letters and maximum 12 characters';
    }
    
    if(!input.duration){
        errors.duration = 'Duration is required'
    }else if(!/^(?=.{1,11}$)(?=(?:.*\d){1,3})[a-z0-9 ]+$/.test(input.duration)){
        errors.duration = 'Duration is invalid, can only contain up to 11 characters'
    }else if(!((input.duration.includes('minutes')) || (input.duration.includes('hours')) || (input.duration.includes('days')) || (input.duration.includes('weeks')) || (input.duration.includes('months')) ||  (input.duration.includes('years')))){
         errors.duration = 'Duration is invalid, must contain numbers and the time in (minutes, hours, days, weeks, months or years)'
    }
    
    if(!input.difficulty){
        errors.difficulty = 'Difficulty is required'
    }
    
    if(!input.season){
        errors.season = 'Season is required'
    }
  
    return errors;
  };
  