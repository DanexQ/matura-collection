import { TaskListProps } from "../components/Main/Tasks/Tasks";

type ACTION_TYPE = {
  type: "SET_STATE";
  payload: TaskListProps;
};

const initialState: TaskListProps | null = null;
export const taskReducer = (
  state: typeof initialState,
  action: ACTION_TYPE
) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...action.payload };
    default:
      alert("Something went wrong with reducers");
      break;
  }
};
