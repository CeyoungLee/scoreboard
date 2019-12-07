import {combineReducers} from "redux";
import {playerReducer} from "./players";

export const allReducers = combineReducers({
playerReducer //초기상태 리턴된걸로 매핑
});