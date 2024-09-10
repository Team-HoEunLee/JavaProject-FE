interface PropsType {
  text?: string;
}

const ProblemTag = ({ text }: PropsType) => {
  return (
    <div className="px-[20px] py-[4px] rounded-[24px] bg-white">
      <p className="text-main300">{text}</p>
    </div>
  );
};

export default ProblemTag;
