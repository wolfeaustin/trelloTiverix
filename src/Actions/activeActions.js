export const ACTIVE_BOARD = "activeBoard";

export function activeBoard(board_id) {
  return {
    type: ACTIVE_BOARD,
    payload: {
      id: board_id
    }
  };
}
