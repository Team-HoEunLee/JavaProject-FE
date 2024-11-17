import { ChangeEvent } from 'react';

interface PropsType {
  name?: string;
  value?: string;
  icon?: React.FC;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, icon: Icon, placeholder, onChange }: PropsType) => {
  return (
    <div className="w-full items-center border-gray300 border-b flex gap-1">
      {Icon && <Icon />}
      <input
        className="w-72 py-3.5 px-1.5 text-regular14 outline-none"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
