import * as S from "./StyledTasks";
import Task from "./Task";

const Tasks = () => {
  return (
    <S.TasksContainer>
      <Task taskNumber={1} taskPoints={3} examYear={2021} formulaType={"old"} />
      <Task taskNumber={1} taskPoints={3} examYear={2021} formulaType={"old"} />
      <Task taskNumber={1} taskPoints={3} examYear={2021} formulaType={"old"} />
      <Task taskNumber={1} taskPoints={3} examYear={2021} formulaType={"old"} />
      <Task taskNumber={1} taskPoints={3} examYear={2021} formulaType={"old"} />
      <Task taskNumber={1} taskPoints={3} examYear={2021} formulaType={"new"} />
      <Task taskNumber={1} taskPoints={3} examYear={2021} formulaType={"old"} />
      <Task taskNumber={1} taskPoints={3} examYear={2021} formulaType={"new"} />
    </S.TasksContainer>
  );
};

export default Tasks;
