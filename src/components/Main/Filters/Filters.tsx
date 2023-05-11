import { useEffect, useState } from "react";
import * as S from "./StyledFilters";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

interface TaskTypesProps {
  taskType: string;
  quantity: number;
}

const Filters = () => {
  const [taskTypes, setTaskTypes] = useState<TaskTypesProps[] | null>(null);
  const filterElements = taskTypes?.map((item) => (
    <S.FilterElement key={item.taskType}>
      <input type="checkbox" name={item.taskType} />
      <label htmlFor={item.taskType}>
        {item.taskType} <S.FilterQuantity>({item.quantity})</S.FilterQuantity>
      </label>
    </S.FilterElement>
  ));

  useEffect(() => {
    let ignore = false;
    if (ignore) return;

    getTaskTypes();

    return () => {
      ignore = true;
    };
  }, []);

  const getTaskTypes = async () => {
    const fetchedData = await getDocs(collection(db, "taskTypes"));
    const types: TaskTypesProps[] = [];
    fetchedData.forEach((doc) => {
      types.push({ taskType: doc.id, quantity: doc.data().quantity });
    });
    setTaskTypes(types);
  };

  return (
    <S.FiltersContainer>
      <S.FiltersTitle>Filtruj zadania</S.FiltersTitle>
      <S.Filters>{!!taskTypes && filterElements}</S.Filters>
    </S.FiltersContainer>
  );
};

export default Filters;
