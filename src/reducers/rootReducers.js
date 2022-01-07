import { combineReducers } from "redux";
import classReducer from "./classReducer";
import teacherReducer from "./teacherReducer";
import studentReducer from "./studentReducer";

export default combineReducers({
  classReducer,
  teacherReducer,
  studentReducer
});
