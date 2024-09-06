import { Check } from '../../assets/Auth/index';

interface PropsType {
  text?: string;
}

const Options = ({ text }: PropsType) => {
  return (
    <div className="flex items-center px-5 py-2 gap-2 border-b border-b-gray400">
      <Check />
      <p className="w-full text-medium14 text-gray500">{text}</p>
    </div>
  );
};

export default Options;
