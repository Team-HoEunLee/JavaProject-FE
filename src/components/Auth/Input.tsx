interface PropsType {
  name?: string;
  icon?: React.FC;
  placeholder?: string;
}

const Input = ({ name, icon: Icon, placeholder }: PropsType) => {
  return (
    <div className="w-full items-center border-gray300 border-b flex gap-1">
      {Icon && <Icon />}
      <input
        className="w-72 py-3.5 px-1.5 text-regular14 outline-none"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
