import { DELETE_BOARD, ADD_BOARD } from "../Actions/boardActions";
let nextID = 2;

export default function boardReducer(state = [], { type, payload }) {
  switch (type) {
    case DELETE_BOARD:
      return state.filter(i => i.id !== payload.id);
    case ADD_BOARD:
      return [...state, { name: payload.name, id: (nextID += 1) }];
    default:
      return state;
  }
}
