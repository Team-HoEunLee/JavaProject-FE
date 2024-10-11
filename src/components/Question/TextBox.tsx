interface PropsType {
  title?: string;
  content?: string;
}

const TextBox = ({ title, content }: PropsType) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-semi20">{title}</p>
      <div className="py-[24px] px-[20px] border border-gray300 rounded-[8px]">
        <p className="text-regular14 text-gray900 leading-[220%]">{content}</p>
      </div>
    </div>
  );
};

export default TextBox;
