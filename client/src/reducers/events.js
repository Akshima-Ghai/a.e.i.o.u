import { FETCH_ALL, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from "../constants/actionTypes";

const EventReducer = (state = { isLoading: true, events: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        events: action.payload,
      };
    case CREATE:
      return { ...state, events: [...state.events, action.payload] };
    case UPDATE:
      return { ...state, events: state.events.map((event) => (event._id === action.payload._id ? action.payload : event)) };
    case DELETE:
      return { ...state, events: state.events.filter((event) => event._id !== action.payload) };
    default:
      return state;
  }
};

export default EventReducer;
