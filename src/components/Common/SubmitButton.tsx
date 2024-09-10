interface PropsType {
  text?: string;
}

const SubmitButton = ({ text }: PropsType) => {
  return (
    <div className="w-full flex justify-center items-center py-[12px] rounded-[30px] bg-main300">
      <p className="text-medium18 text-white">{text}</p>
    </div>
  );
};

export default SubmitButton;
