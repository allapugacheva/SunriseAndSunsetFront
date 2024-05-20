import axios from "axios";

//const BASE_URL = import.meta.env.VITE_API_URL;

const BASE_URL = 'https://sunriseandsunsetservice.onrender.com/api/v1/suntime/sunriseandsunset';

export const getAllSunrisesAndSunsets = () => axios.get(BASE_URL)

export const addSuntiseAndSunset = (latitude, longitude, date) => 
                    axios.post(BASE_URL + '?lat=' + latitude + '&lng=' + longitude + '&date=' + date)

export const getSunriseAndSunset = (locationId, dateId) => axios.get(BASE_URL + '/one?locationId='
                                 + locationId + '&dateId=' + dateId)          
                        
export const updateSunriseAndSunset = (locationId, dateId, latitude, longitude, date) => axios.put(BASE_URL +
                '?locationId=' + locationId + '&dateId=' + dateId +
                '&lat=' + latitude + '&lng=' + longitude + '&date=' + date)       
                
export const deleteSunriseAndSunset = (locationId, dateId) => axios.delete(BASE_URL +
                '?locationId=' + locationId + '&dateId=' + dateId)                