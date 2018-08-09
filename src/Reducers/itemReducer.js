import { DELETE_ITEM, ADD_ITEM, CHANGE_LIST } from "../Actions/itemActions";

let nextID = 2;

export default function itemReducer(state = [], { type, payload }) {
  switch (type) {
    case DELETE_ITEM:
      return state.filter(i => i.id !== payload.id);
    case ADD_ITEM:
      return [
        ...state,
        { name: payload.name, id: (nextID += 1), list_id: payload.list_id }
      ];
    case CHANGE_LIST:
      return state.map(
        i =>
          i.id === payload.item_id
            ? { name: i.name, id: i.id, list_id: payload.list_id }
            : i
      );
    default:
      return state;
  }
}
