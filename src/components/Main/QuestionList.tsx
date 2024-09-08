import { useState } from 'react';
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

  return (
    <div className="flex justify-between items-center px-[30px] py-[10px]">
      <span className="w-[28px] h-[28px]"> {checked && <Checked />} </span>
      <p className="w-[410px] text-medium16 text-gray900 whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </p>
      <div className="w-[180px]">
        {felid.map((value, index) => (
          <MajorSubjectTag key={index} text={value} />
        ))}
      </div>
      <div className="w-[42px] flex justify-center">{levelIcon}</div>
      <p className="w-[62px] flex justify-center text-medium16 text-gray900">{avgScore}</p>
    </div>
  );
};

export default QuestionList;
