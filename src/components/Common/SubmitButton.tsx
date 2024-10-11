interface PropsType {
  text?: string;
  onClick?: () => void;
}

const SubmitButton = ({ text, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-center items-center py-[12px] rounded-[30px] bg-main200 hover:bg-main300"
    >
      <p className="text-medium18 text-white">{text}</p>
    </button>
  );
};

export default SubmitButton;
