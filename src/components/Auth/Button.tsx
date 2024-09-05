interface ButtonPropsType {
  text?: string;
}

const Button = ({ text }: ButtonPropsType) => {
  return (
    <div className="w-full flex justify-center items-center rounded-lg bg-main300 p-3">
      <p className="text-semi16 text-white">{text}</p>
    </div>
  );
};

export default Button;
