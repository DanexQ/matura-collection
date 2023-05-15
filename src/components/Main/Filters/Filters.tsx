import { useEffect, useState } from "react";
import * as S from "./StyledFilters";
import { db } from "../../../firebase";
import {
  QueryCompositeFilterConstraint,
  QueryConstraint,
  QueryFilterConstraint,
  collection,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";

interface TaskTypesProps {
  taskType: string;
  quantity: number;
}

const Filters = () => {
  const [taskTypes, setTaskTypes] = useState<TaskTypesProps[] | null>(null);
  const [filters, setFilters] = useState<string[]>([]);

  const filtersState: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked, value } = e.currentTarget;

    setFilters((prevState) =>
      checked
        ? [...prevState, value]
        : prevState.filter((removedVal) => removedVal != value)
    );
  };

  const filterElements = taskTypes?.map((item) => (
    <S.FilterElement key={item.taskType}>
      <input
        type="checkbox"
        name={item.taskType}
        id={item.taskType}
        onChange={filtersState}
        value={item.taskType}
      />
      <label htmlFor={item.taskType}>
        {item.taskType} <S.FilterQuantity>({item.quantity})</S.FilterQuantity>
      </label>
    </S.FilterElement>
  ));

  useEffect(() => {
    let ignore = false;
    if (ignore) return;

    fetchTaskTypes();

    return () => {
      ignore = true;
    };
  }, []);

  const fetchTaskTypes = async () => {
    const fetchedData = await getDocs(collection(db, "taskTypes"));
    const types: TaskTypesProps[] = [];
    fetchedData.forEach((doc) => {
      types.push({ taskType: doc.id, quantity: doc.data().quantity });
    });
    setTaskTypes(types);
  };

  const fetchFilteredTypes = async () => {
    if (!!!filters.length) return;
    try {
      const queryList = filters.map((filter) =>
        where("taskType", "==", filter)
      );
      const tasksRef = collection(db, "tasks");
      const q = query(tasksRef, or(...queryList));
      const dataSnap = await getDocs(q);
      dataSnap.forEach((doc) => console.log(doc.data()));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.FiltersContainer>
      <S.FiltersTitle>Filtruj zadania</S.FiltersTitle>
      <S.Filters>{!!taskTypes && filterElements}</S.Filters>
      <S.SubmitButton onClick={fetchFilteredTypes}>
        Filtruj zadania
      </S.SubmitButton>
    </S.FiltersContainer>
  );
};

export default Filters;
