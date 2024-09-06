import { useState } from 'react';
import { Checked } from '../../assets/Auth/index';
import { QuestionListDataTypes } from '../../models/index';
import MajorSubjectTag from '../Common/MajorSubjectTag';
import { Zero, One, Two, Three, Four } from 'assets/Common';

const QuestionList = ({ checked, title, felid, level, avgScore }: QuestionListDataTypes) => {
  return (
    <div className="flex items-center px-[30px] py-[10px] gap-[50px]">
      <span className="w-[28px] h-[28px]"> {checked && <Checked />} </span>
      <p className="w-[410px] text-medium16 text-gray900">{title}</p>
      <div className="w-[190px]">
        {felid.map((value, index) => (
          <MajorSubjectTag key={index} text={value} />
        ))}
      </div>
      <div className="w-[42px]">
        <Zero />
      </div>
      <p className="w-[65px] text-medium16 text-gray900">평균 점수</p>
    </div>
  );
};

export default QuestionList;
