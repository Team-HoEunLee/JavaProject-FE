import { useState } from 'react';

export function useCheckedList() {
  const [checkedList, setCheckedList] = useState<number[]>([]);

  const handleChange = (value: number) => {
    setCheckedList((checkedList) => {
      if (checkedList.includes(value)) {
        return checkedList.filter((item) => item !== value);
      } else {
        return [...checkedList, value];
      }
    });
  };

  const handleReset = () => {
    setCheckedList([]);
  };

  return { handleChange, handleReset, checkedList };
}
