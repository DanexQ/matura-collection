import * as S from "./StyledTasks";
import Task from "./Task";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useState } from "react";

type taskType = {
  content: string;
  answer: string;
  examType: "oficjalna" | "dodatkowa" | "próbna";
  examYear: number;
  points: number;
  imageUrl?: string;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<taskType[] | null>(null);
  // const tasksElements = tasks?.forEach(task => <Task taskProps={task})
  const getTasks = async () => {
    const tasksRef = collection(db, "tasks");
    const tasksSnap = await getDocs(tasksRef);
    tasksSnap.forEach((doc) => console.log(doc.id, doc.data()));
  };

  return (
    <S.TasksContainer>
      <Task></Task>
    </S.TasksContainer>
  );
};

export default Tasks;
