import { useState, useRef, useEffect } from 'react';
import { Checked } from '../../assets/Auth/index';
import { QuestionListDataTypes } from '../../models/index';
import MajorSubjectTag from '../Common/MajorSubjectTag';
import { Zero, One, Two, Three, Four } from 'assets/Common';

interface LevelIconsDataType {
  [key: number]: JSX.Element;
}

const QuestionList = ({ checked, title, felid, level, avgScore }: QuestionListDataTypes) => {
  const levelIcons: LevelIconsDataType = {
    0: <Zero />,
    1: <One />,
    2: <Two />,
    3: <Three />,
    4: <Four />,
  };

  const levelIcon = levelIcons[level] || null;
  const felidLength = felid.length;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hiddenCount, setHiddenCount] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemsWidth = container.querySelector('span')?.offsetWidth || 0;
      const visibleItemCount = Math.floor(180 / itemsWidth);

      setHiddenCount(felidLength - visibleItemCount);
    }
  }, [felid]);

  const visibleItems = felid.slice(0, felidLength - hiddenCount);

  return (
    <div className="flex justify-between items-center px-[30px] py-[10px]">
      <span className="w-[28px] h-[28px]"> {checked && <Checked />} </span>
      <p className="w-[410px] text-medium16 text-gray900 whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </p>
      <div ref={containerRef} className="w-[180px] flex flex-wrap gap-2 overflow-hidden">
        {visibleItems.map((value, index) => (
          <MajorSubjectTag key={index} text={value} />
        ))}
        {hiddenCount > 0 && <p className="text-medium14 text-gray800">...+{hiddenCount}</p>}
      </div>
      <div className="w-[42px] flex justify-center">{levelIcon}</div>
      <p className="w-[62px] flex justify-center text-medium16 text-gray900">{avgScore}</p>
    </div>
  );
};

export default QuestionList;
