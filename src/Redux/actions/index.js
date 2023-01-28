import { ADD_CHATBOT_INFO, CURRENT_PAGE, GET_ALL_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_DETAILS, GET_COUNTRIES_FOR_CONTINENT, GET_COUNTRIES_MATCH, GET_COUNTRIES_SORT, GET_FILTER_ACTIVITIES, HANDLER_PAGINATION, POST_ACTIVITY, SHOW_ALL_ACTIVITIES, SWITCH_THEME } from "../actions-types";
import axios from "axios"
const URL_BACK = 'http://52.86.204.209:3001'

const instance = axios.create({
  baseURL:URL_BACK,
  headers:{
    'Access-Control-Allow-Origin':URL_BACK,
      'Referrer-Policy': 'unsafe-url'
  }
})

export function addChatBotInfo(payload) {
  return { type: ADD_CHATBOT_INFO, payload };
}

export function getCountries(){
  return async function (dispatch){
    const {data,status} = await instance.get(`/countries`)
    dispatch({type: GET_COUNTRIES, payload:[data,status] })
  }
}

export function getCountriesMatch(name){
  return async function (dispatch){
    try {
      const {data ,status} = await instance.get(`/countries?name=${name}`)
      dispatch({type: GET_COUNTRIES_MATCH, payload:[data,status] })
    } catch (error) {
      return dispatch({type: GET_COUNTRIES_MATCH, payload:404 })
    }
    
  }
}

export function getCountriesDetails(id){
  return async function (dispatch){
    const {data} = await instance.get(`/countries/${id}`)
    dispatch({type: GET_COUNTRIES_DETAILS, payload:data })
  }
}

export function showAllActivies(){
  return async function (dispatch){
    const {data} = await instance.get(`/allActivities`)
    dispatch({type: SHOW_ALL_ACTIVITIES, payload:data})
  }
}

export function getAllActivies(){
  return async function (dispatch){
    const {data} = await instance.get(`/countries`)
    dispatch({type: GET_ALL_ACTIVITIES, payload:data})
  }
}

export function getFilterActivities(nameActivity){
  return{type: GET_FILTER_ACTIVITIES, payload:nameActivity}
}

export function setCurrentPage(currentPage){
  return {
    type:CURRENT_PAGE,
    payload:currentPage
  }
}

export function postActivity(body){
  return async function (dispatch){
    const {data} = await instance.post(`/activities`,body)
    
    dispatch({type: POST_ACTIVITY, payload:data })
  }
}

export function filterForContinent(searchContinent){
  return async function (dispatch){
    const {data} = await instance.get(`/countries`)
    dispatch({type: GET_COUNTRIES_FOR_CONTINENT, payload:[ searchContinent,...data] })
  }
}


export function getCountriesSort(data){
  return {
    type:GET_COUNTRIES_SORT,
    payload:data
  }
}


export function switchTheme(data){
  return {
    type:SWITCH_THEME,
    payload:data
  }
}
