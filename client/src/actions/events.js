import * as api from "../api/index";
import { FETCH_ALL, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from "../constants/actionTypes";

export const getEvents = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchEvents();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const createEvent = (event, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createEvent(event);
    dispatch({ type: CREATE, payload: data });
    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};
export const updateEvent = (id, event) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, event);
    dispatch({ type: UPDATE, payload: data });
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
