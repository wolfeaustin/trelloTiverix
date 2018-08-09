export const DELETE_LIST = "deleteList";
export const ADD_LIST = "addList";

export function deleteList(list_id) {
  return {
    type: DELETE_LIST,
    payload: {
      id: list_id
    }
  };
}

export function addList(listName, boardId) {
  return {
    type: ADD_LIST,
    payload: {
      name: listName,
      board_id: boardId
    }
  };
}
