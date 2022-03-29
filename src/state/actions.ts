export type Action = AddListAction | AddTaskAction | MoveListAction;

export enum Actions {
  ADDLIST = "ADD_LIST",
  ADDTASK = "ADD_TASK",
  MOVELIST = "MOVE_LIST",
}

interface AddListAction {
  type: Actions.ADDLIST;
  payload: string;
}

interface AddTaskAction {
  type: Actions.ADDTASK;
  payload: { text: string; listId: string };
}

interface MoveListAction {
  type: Actions.MOVELIST;
  payload: {
    draggedId: string;
    hoverId: string;
  };
}

export const addTask = (text: string, listId: string): Action => ({
  type: Actions.ADDTASK,
  payload: {
    text,
    listId,
  },
});

export const addList = (text: string): Action => ({
  type: Actions.ADDLIST,
  payload: text,
});

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: Actions.MOVELIST,
  payload: {
    draggedId,
    hoverId,
  },
});
