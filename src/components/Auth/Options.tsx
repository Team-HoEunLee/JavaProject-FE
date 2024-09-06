import { useState } from 'react';
import { Check, Checked } from '../../assets/Auth/index';

interface PropsType {
  text?: string;
}

const Options = ({ text }: PropsType) => {
  const [selected, setSelected] = useState<boolean>();

  return (
    <div
      className="flex items-center px-5 py-2 gap-2 border-b border-b-gray400"
      onClick={() => setSelected(!selected)}
    >
      {selected ? <Checked /> : <Check />}
      <p className={`w-full text-medium14  ${selected ? 'text-main200' : 'text-gray500'}`}>
        {text}
      </p>
    </div>
  );
};

export default Options;
