import React, { useState } from "react";
import * as S from "./StyledAddTaskForm";
import { collection, setDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

type taskType = {
  content: string;
  answer: string;
  examType: "oficjalna" | "dodatkowa" | "próbna";
  examYear: number;
  taskType: string;
  points: number;
  imageUrl?: string;
};

const AddTaskForm = () => {
  const defaultTask: taskType = {
    content: "",
    answer: "",
    examType: "oficjalna",
    examYear: 2023,
    taskType: "",
    points: 0,
  };
  const [task, setTask] = useState(defaultTask);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleTaskChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const input = e.currentTarget;
    setTask((prevTask) => ({ ...prevTask, [input.name]: input.value }));
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sendTask(task);
    setTask(defaultTask);
  };

  const handleUploadImage = async () => {
    if (uploadedImage === null) return;
    try {
      const taskImageRef = ref(storage, `taskImages/${v4()}`);
      const snapshot = await uploadBytes(taskImageRef, uploadedImage);
      const url = await getDownloadURL(snapshot.ref);
      setTask((prevTask) => ({ ...prevTask, imageUrl: url }));
    } catch (err) {
      console.log("Couldn't upload this image");
    }
  };

  const sendTask = async (data: taskType) => {
    const newTaskRef = doc(collection(db, "tasks"));
    try {
      await setDoc(newTaskRef, data);
      alert("Task has been send successfully!");
    } catch (e) {
      alert("Couldn't send this task");
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
        <label htmlFor="image">Zdjęcie</label>
        <input
          type="file"
          name="image"
          onChange={(e) => setUploadedImage(e.target.files![0])}
        />
        <button type="button" onClick={handleUploadImage}>
          Upload image
        </button>
        <S.FormButton type="submit">Prześlij zadanie</S.FormButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default AddTaskForm;
