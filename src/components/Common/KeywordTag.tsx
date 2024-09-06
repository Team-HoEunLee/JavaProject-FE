interface PropsType {
  text?: string;
}

const KeywordTag = ({ text }: PropsType) => {
  return (
    <div className="px-[16px] py-[5px] border border-gray900 rounded-[20px]">
      <p className="text-medium12 text-gray900">{text}</p>
    </div>
  );
};

export default KeywordTag;
