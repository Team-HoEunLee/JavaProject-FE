interface PropsType {
  text?: string;
}

const ProblemTag = ({ text }: PropsType) => {
  return (
    <div className="px-[10px] py-[2px] rounded-[20px] bg-main100">
      <p className="text-main200 text-medium14">{text}</p>
    </div>
  );
};

export default ProblemTag;
