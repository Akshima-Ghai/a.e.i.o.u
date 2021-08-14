import { combineReducers } from "redux";
import auth from "./auth";
import events from "./events";

export default combineReducers({ auth, events });
