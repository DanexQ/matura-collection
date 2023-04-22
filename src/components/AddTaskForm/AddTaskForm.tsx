import React, { useState } from "react";
import * as S from "./StyledAddTaskForm";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { FirebaseError } from "firebase/app";

type taskType = {
  content: string;
  answer: string;
  examType: "oficjalna" | "dodatkowa" | "próbna";
  examYear: number;
  points: number;
};

const AddTaskForm = () => {
  const defaultTask: taskType = {
    content: "",
    answer: "",
    examType: "oficjalna",
    examYear: 2023,
    points: 0,
  };
  const [task, setTask] = useState(defaultTask);

  const handleTaskChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const input = e.currentTarget;
    setTask((prevTask) => ({ ...prevTask, [input.name]: input.value }));
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTask(defaultTask);
    sendTask(task);
  };

  const sendTask = async (data: taskType) => {
    const newTaskRef = doc(collection(db, "tasks"));
    try {
      await setDoc(newTaskRef, data);
      alert("Pomyślnie wysłano dane!");
    } catch (e) {
      alert("Coś poszło nie tak :<");
    }
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleFormSubmit}>
        <label htmlFor="content">Zadanie:</label>
        <input
          type="text"
          name="content"
          onChange={handleTaskChange}
          value={task.content}
        />
        <label htmlFor="answer">Odpowiedź:</label>
        <input
          type="text"
          name="answer"
          onChange={handleTaskChange}
          value={task.answer}
        />
        <label htmlFor="examType">Typ matury:</label>
        <select
          name="examType"
          onChange={handleTaskChange}
          value={task.examType}
        >
          <option value="oficjalna">Oficjalna</option>
          <option value="dodatkowa">Dodatkowa</option>
          <option value="próbna">Próbna</option>
        </select>
        <label htmlFor="examYear">Rok:</label>
        <input
          type="number"
          name="examYear"
          onChange={handleTaskChange}
          value={task.examYear}
        />
        <label htmlFor="Punkty">Punkty:</label>
        <input
          type="number"
          name="points"
          onChange={handleTaskChange}
          value={task.points}
        />
        <S.FormButton type="submit">Prześlij zadanie</S.FormButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default AddTaskForm;
