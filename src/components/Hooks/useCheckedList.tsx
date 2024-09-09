import { useState } from 'react';

export function useCheckedList() {
  const [checkedList, setCheckedList] = useState<string[]>(['모든 상태']);

  const handleChange = (value: string) => {
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
