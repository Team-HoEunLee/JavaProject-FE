interface PropsType {
  text?: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: PropsType) => {
  return (
    <button className="px-[20px] py-[12px] rounded-[8px] bg-main300" onClick={onClick}>
      <p className="text-medium16 text-white">{text}</p>
    </button>
  );
};

export default Button;
