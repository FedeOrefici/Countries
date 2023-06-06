import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_ID, GET_BY_NAME, POST_ACTIVITY, CLEAR_COUNTRY_DETAIL, GET_ACTIVITIES, CLEAN_ALL, FILTERS } from "./action-types";

export const getCountries = () => {
  return async (dispatch) => {
    const response = (await axios.get("http://localhost:3001/countries")).data;
    return dispatch({ type: GET_COUNTRIES, payload: response });
  };
};

export const getCountryId = (id) => {
  return async (dispatch) => {
    const response = (await axios.get(`http://localhost:3001/countries/${id}`)).data
    return dispatch({type: GET_COUNTRY_ID, payload: response})
  }
}

export const getCountryName = (name) => {
  return async (dispatch) => {
    const response = (await axios.get(`http://localhost:3001/countries/?name=${name}`)).data
    return dispatch({type: GET_BY_NAME, payload: response})
  }
}

export const postActivity = (payload) => {
  return async (dispatch) => {
    const response = (await axios.post('http://localhost:3001/activities', payload)).data
    return dispatch({type: POST_ACTIVITY, payload: response})
  }
}

export const getActivities = () => {
  return async (dispatch) => {
    const response = (await axios.get('http://localhost:3001/activities')).data
    return dispatch ({type: GET_ACTIVITIES, payload: response})
  }
}

export const clearCountryDetail = () => {
  return {type: CLEAR_COUNTRY_DETAIL}
}

export const filter = (countries) => {
  return {type: FILTERS, payload: countries}
}