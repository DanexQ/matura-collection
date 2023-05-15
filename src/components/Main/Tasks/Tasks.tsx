import * as S from "./StyledTasks";
import Task from "./Task";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useLayoutEffect, useState } from "react";
import { TaskProps } from "./Task";

export interface TaskListProps {
  id: string;
  details: TaskProps;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskListProps[]>([]);
  const tasksElements = tasks.map((task) => (
    <Task key={task.id} {...task.details} />
  ));

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      getTasks();
    }

    return () => {
      ignore = true;
    };
  }, []);

  const getTasks = async () => {
    const tasksRef = collection(db, "tasks");
    const tasksSnap = await getDocs(tasksRef);
    let taskList: TaskListProps[] = [];
    tasksSnap.forEach((doc) =>
      taskList.push({ id: doc.id, details: doc.data() as TaskProps })
    );
    setTasks(taskList);
  };

  return <S.TasksContainer>{tasksElements}</S.TasksContainer>;
};

export default Tasks;
