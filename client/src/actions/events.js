import * as api from "../api/index";
import { FETCH_ALL, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from "../constants/actionTypes";
import axios from "axios";


export const getEvents = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchEvents();
    dispatch({ type: FETCH_ALL, payload: data });
    let user = JSON.parse(localStorage.getItem("profile"))
    const res = await axios.get("http://localhost:5000/info/"+ user.result.email)
    user.result.streak = res.data.streak
    localStorage.setItem("profile", JSON.stringify({...user}))
    user = JSON.parse(localStorage.getItem("profile"))
    let counter = 1;
    let startDate = user.result.streak[0].date
    let startMonth = user.result.streak[0].month
      
    for (let i = 1; i < user.result.streak.length; i++){
      if(startMonth === user.result.streak[i].month){
        if(user.result.streak[i].date == parseInt(startDate) + 1){
         counter = counter + 1
          startDate = parseInt(startDate) + 1
        } else {
          counter = 1
          }
      } else {
        startDate = user.result.streak[i].date
        startMonth = user.result.streak[i].month
        if(startDate == 1){
         counter = counter + 1
        }
      }
    }
    dispatch({type:"COUNTER",counter})
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const createEvent = (event, history, email) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createEvent(event);
    dispatch({ type: CREATE, payload: data });
    history.push('/home');
  } catch (error) {
    console.log(error);
  }
};
export const updateEvent = (id, event, history) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, event);
    dispatch({ type: UPDATE, payload: data });
    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};
export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api.deleteEvent(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
