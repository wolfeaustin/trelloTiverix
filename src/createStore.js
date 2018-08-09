import rootReducer from "./Reducers/Index.js";
import { createStore } from "redux";
const store = createStore(
  rootReducer,
  {
    boards: [{ name: "Board 1", id: 1 }, { name: "Board 2", id: 2 }],
    lists: [
      { name: "List 1", id: 1, board_id: 1 },
      { name: "List 2", id: 2, board_id: 2 }
    ],
    items: [
      { name: "Item for Board 2", id: 1, list_id: 1 },
      { name: "Item 2 for Board 2", id: 2, list_id: 2 }
    ],
    active_board: -1
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
