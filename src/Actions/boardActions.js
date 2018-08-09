export const DELETE_BOARD = "deleteBoard";
export const ADD_BOARD = "addBoard";

export function deleteBoard(board_id) {
  return {
    type: DELETE_BOARD,
    payload: {
      id: board_id
    }
  };
}

export function addBoard(boardName) {
  return {
    type: ADD_BOARD,
    payload: {
      name: boardName
    }
  };
}
