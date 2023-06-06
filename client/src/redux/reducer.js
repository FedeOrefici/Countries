import { CLEAN_ALL, CLEAR_COUNTRY_DETAIL, FILTERS, GET_ACTIVITIES, GET_BY_NAME, GET_COUNTRIES, GET_COUNTRY_ID, POST_ACTIVITY } from "./action-types";

let initialState = {
  allCountries: [],
  copyCountries: [],
  countryDetail: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        copyCountries: action.payload,
      };
    
    case GET_COUNTRY_ID:
      return {
        ...state,
        countryDetail: action.payload,
      }
    
    case CLEAR_COUNTRY_DETAIL:
      return {
        ...state,
        copyCountries: [...state.allCountries],
        countryDetail: [],
      }

    case GET_BY_NAME:
      return {
        ...state,
        copyCountries: action.payload,
      }

    case POST_ACTIVITY:
      return {
        ...state,
        copyCountries: [...state.allCountries, action.payload],
        activities: [...state.activities, action.payload],
      }

    case FILTERS: 
      return {
        ...state,
        copyCountries: action.payload,
      }

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      }

    case CLEAN_ALL:
      return {
        ...state,
        copyCountries: [...state.allCountries],
      }

    default:
      return state;
  }
};

export default rootReducer;
