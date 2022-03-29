import { nanoid } from "nanoid";
import { Action, Actions } from "./actions";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case Actions.ADDLIST: {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case Actions.ADDTASK: {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
    case Actions.MOVELIST: {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
      break;
    }
  }
};
