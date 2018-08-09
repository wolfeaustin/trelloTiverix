import { DELETE_LIST, ADD_LIST } from "../Actions/listActions";

let nextID = 2;

export default function listReducer(state = [], { type, payload }) {
  switch (type) {
    case DELETE_LIST:
      return state.filter(i => i.id !== payload.id);
    case ADD_LIST:
      return [
        ...state,
        { name: payload.name, id: (nextID += 1), board_id: payload.board_id }
      ];
    default:
      return state;
  }
}
