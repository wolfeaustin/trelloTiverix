export const DELETE_ITEM = "deleteItem";
export const ADD_ITEM = "addItem";
export const CHANGE_LIST = "changeList";

export function deleteItem(item_id) {
  return {
    type: DELETE_ITEM,
    payload: {
      id: item_id
    }
  };
}

export function addItem(itemName, listId) {
  return {
    type: ADD_ITEM,
    payload: {
      name: itemName,
      list_id: listId
    }
  };
}
export function changeList(itemId, newListId) {
  return {
    type: CHANGE_LIST,
    payload: {
      item_id: itemId,
      list_id: newListId
    }
  };
}
