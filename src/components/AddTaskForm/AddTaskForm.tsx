import React, { useState } from "react";
import * as S from "./StyledAddTaskForm";
import { collection, setDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Task from "../Main/Tasks/Task";
import { TaskProps } from "../Main/Tasks/Task";

const AddTaskForm = () => {
  const defaultTask: TaskProps = {
    content: "",
    answer: "",
    taskType: "",
    formula: "Nowa",
    examType: "Oficjalna",
    examYear: 2023,
    points: 0,
  };
  const [task, setTask] = useState(defaultTask);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [showTask, setShowTask] = useState<boolean>(false);

  const handleChange: React.ChangeEventHandler<
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

  const sendTask = async (data: TaskProps) => {
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
          onChange={handleChange}
          value={task.content}
        />
        <label htmlFor="answer">Odpowiedź:</label>
        <input
          type="text"
          name="answer"
          onChange={handleChange}
          value={task.answer}
        />
        <label htmlFor="taskType">Typ zadania:</label>
        <select name="taskType" onChange={handleChange} value={task.taskType}>
          <option value="Stereometria">Stereometria</option>
          <option value="Optymalizacja">Optymalizacja</option>
          <option value="Granice">Granice</option>
          <option value="Trygonometria">Trygonometria</option>
          <option value="Równania trygonometryczne">
            Równania trygonometryczne
          </option>
          <option value="Wielomiany">Wielomiany</option>
          <option value="Ciągi">Ciągi</option>
          <option value="Dowody algebraiczne">Dowody algebraiczne</option>
          <option value="Dowody geometryczne">Dowody geometryczne</option>
          <option value="Nierówności">Nierówności</option>
          <option value="Równania z parametrem">Równania z parametrem</option>
          <option value="Prawdopodobieństwo">Prawdopodobieństwo</option>
          <option value="Kombinatoryka">Kombinatoryka</option>
          <option value="Wartości bezwzględne">Wartości bezwzględne</option>
          <option value="Geometria analityczna">Geometria analityczna</option>
          <option value="Planimetria">Planimetria</option>
        </select>
        <label htmlFor="formula">Formuła:</label>
        <select name="formula" onChange={handleChange} value={task.formula}>
          <option value="Nowa">Nowa</option>
          <option value="Stara">Stara</option>
        </select>
        <label htmlFor="examType">Typ matury:</label>
        <select name="examType" onChange={handleChange} value={task.examType}>
          <option value="Oficjalna">Oficjalna</option>
          <option value="Dodatkowa">Dodatkowa</option>
          <option value="Próbna">Próbna</option>
        </select>
        <label htmlFor="examYear">Rok:</label>
        <input
          type="number"
          name="examYear"
          onChange={handleChange}
          value={task.examYear}
        />
        <label htmlFor="Punkty">Punkty:</label>
        <input
          type="number"
          name="points"
          onChange={handleChange}
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
      ZADANIE BĘDZIE WYGLĄDAĆ TAK JAK PONIŻEJ:
      <button onClick={() => setShowTask((prevVal) => !prevVal)}>
        Pokaż zadanie
      </button>
      {showTask && <Task {...task} />}
    </S.FormContainer>
  );
};

export default AddTaskForm;
