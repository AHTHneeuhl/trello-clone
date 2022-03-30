import { DragItem } from "../DragItem";

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | SetDraggedItem
  | MoveTaskAction;

export enum Actions {
  ADDLIST = "ADD_LIST",
  ADDTASK = "ADD_TASK",
  MOVELIST = "MOVE_LIST",
  SETDRAGGEDITEM = "SET_DRAGGED_ITEM",
  MOVETASK = "MOVE_TASK",
}

interface MoveTaskAction {
  type: Actions.MOVETASK;
  payload: {
    draggedItemId: string;
    hoveredItemId: string | null;
    sourceColumnId: string;
    targetColumnId: string;
  };
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

interface SetDraggedItem {
  type: Actions.SETDRAGGEDITEM;
  payload: DragItem | null;
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

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: Actions.SETDRAGGEDITEM,
  payload: draggedItem,
});

export const moveTask = (
  draggedItemId: string,
  hoveredItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
): Action => ({
  type: Actions.MOVETASK,
  payload: {
    draggedItemId,
    hoveredItemId,
    sourceColumnId,
    targetColumnId,
  },
});
