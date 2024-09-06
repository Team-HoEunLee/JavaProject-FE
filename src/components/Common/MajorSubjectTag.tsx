interface PropsType {
  text?: string;
}

const MajorSubjectTag = ({ text }: PropsType) => {
  return (
    <span className="max-w-full pt-0.5 pb-1 px-2.5 rounded-3xl bg-main100">
      <p className="text-medium12 text-main200 inline-block">{text}</p>
    </span>
  );
};

export default MajorSubjectTag;
