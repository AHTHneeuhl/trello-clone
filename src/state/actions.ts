export type Action = AddListAction | AddTaskAction;

export enum Actions {
  ADDLIST = "ADD_LIST",
  ADDTASK = "ADD_TASK",
}

interface AddListAction {
  type: Actions.ADDLIST;
  payload: string;
}

interface AddTaskAction {
  type: Actions.ADDTASK;
  payload: { text: string; listId: string };
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
