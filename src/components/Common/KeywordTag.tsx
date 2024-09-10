interface PropsType {
  text?: string;
  selected?: boolean;
  onClick?: () => void;
}

const KeywordTag = ({ text, selected = false, onClick }: PropsType) => {
  return (
    <div
      onClick={onClick}
      className={`px-[16px] py-[5px] rounded-[20px] ${selected ? 'border border-main200' : 'border border-gray900'}`}
    >
      <p className={`text-medium14 ${selected ? 'text-main200' : 'text-gray900'}`}>{text}</p>
    </div>
  );
};

export default KeywordTag;
