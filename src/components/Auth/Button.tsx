interface ButtonPropsType {
  text?: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonPropsType) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center rounded-lg bg-main300 px-[20px] py-[8px]"
    >
      <p className="text-semi16 text-white">{text}</p>
    </div>
  );
};

export default Button;
