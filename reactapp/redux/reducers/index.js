import { combineReducers } from "redux";
import { speakers } from "./speakersReducer";
import { sessions } from "./sessionsReducer";

export default combineReducers({
  speakers,
  sessions
});
