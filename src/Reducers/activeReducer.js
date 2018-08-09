import { ACTIVE_BOARD } from "../Actions/activeActions";

export default function activeReducer(state = -1, { type, payload }) {
  switch (type) {
    case ACTIVE_BOARD:
      return payload.id;
    default:
      return state;
  }
}
