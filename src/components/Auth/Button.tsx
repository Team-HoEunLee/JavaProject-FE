interface ButtonPropsType {
  text?: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonPropsType) => {
  return (
    <div
      onClick={onClick}
      className="w-full flex justify-center items-center rounded-lg bg-main300 p-3"
    >
      <p className="text-semi16 text-white">{text}</p>
    </div>
  );
};

export default Button;
