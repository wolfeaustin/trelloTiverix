import { combineReducers } from "redux";
import listReducer from "./listReducer";
import itemReducer from "./itemReducer";
import boardReducer from "./boardReducer";
import activeReducer from "./activeReducer";

const rootReducer = combineReducers({
  boards: boardReducer,
  lists: listReducer,
  items: itemReducer,
  active_board: activeReducer
});
export default rootReducer;
