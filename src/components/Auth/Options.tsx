import { useState } from 'react';
import { Check, Checked } from '../../assets/Auth/index';

interface PropsType {
  text?: string;
  selected?: boolean;
  onClick?: () => void;
}

const Options = ({ text, selected = false, onClick }: PropsType) => {
  return (
    <div className="flex items-center px-5 py-2 gap-2 border-b border-b-gray400" onClick={onClick}>
      {selected ? <Checked /> : <Check />}
      <p className={`w-full text-medium14  ${selected ? 'text-main200' : 'text-gray500'}`}>
        {text}
      </p>
    </div>
  );
};

export default Options;
