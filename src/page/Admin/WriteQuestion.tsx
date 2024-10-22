import SubmitButton from 'components/Common/SubmitButton';
import KeywordTag from 'components/Common/KeywordTag';
import { Major } from '../../constants';
import getLevelIcon from 'utils/getLevelIcon';
import { useState } from 'react';

const WriteQuestion = () => {
  const [detailSkill, setDetailSkill] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [question, setQuestion] = useState<string>('');

  const handleAddSkill = () => {
    if (inputValue === '' || detailSkill.includes(inputValue)) {
      alert('입력할 수 없습니다.');
    } else {
      setDetailSkill((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteSkill = (value: string) => {
    const newDetailSkill = detailSkill.filter((skill) => skill !== value);
    setDetailSkill(newDetailSkill);
  };

  const handleClickSubmit = () => {
    console.log('문제를 등록하였습니다');
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[1302px] h-[80%] flex justify-between gap-[20px] bg-red">
        <div className="flex flex-col justify-between">
          <div className="w-[390px] flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[4px]">
              <p className="text-semi20">
                <span className="text-main300">I</span>nterview
                <span className="text-main300"> Q</span>uestion
                <span className="text-main300"> C</span>olumn
              </p>
              <p className="text-medium14">면접 질문과 관련된 항목을 체크해 주세요</p>
            </div>
            <div className="flex flex-col gap-[20px] py-[20px] px-[16px] border border-gray200 rounded-[8px] bg-gray100">
              <p className="text-medium14">카테고리 및 분야</p>
              <div className="flex flex-wrap gap-[8px]">
                {Major.map((value, index) => (
                  <KeywordTag key={index} text={value} />
                ))}
              </div>
              <div className="flex flex-wrap gap-[8px]">
                {detailSkill.map((value, index) => (
                  <KeywordTag key={index} text={value} onClick={() => handleDeleteSkill(value)} />
                ))}
              </div>
              <div className="flex justify-between gap-[20px]">
                <input
                  className="flex-1 border border-gray300 py-[8px] px-[12px] rounded-[20px] placeholder:text-regular14"
                  placeholder="이 외 세부 기술스택을 추가해보세요"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <button
                  className="w-[55px] px-[8px] py-[4px] rounded-[20px] bg-main300"
                  onClick={handleAddSkill}
                >
                  <p className="text-white">추가</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[4px] py-[20px] px-[16px] border border-gray200 rounded-[8px] bg-gray100">
              <p className="text-medium14">난이도</p>
              <div className="w-full flex justify-center gap-[28px]">
                {[0, 1, 2, 3, 4].map((value) => getLevelIcon(value))}
              </div>
            </div>
          </div>
          <SubmitButton text="문제 등록하기" onClick={() => handleClickSubmit()} />
        </div>
        <div className="w-full h-full flex flex-col gap-[12px]">
          <p className="text-semi20">
            <span className="text-main300">면접 질문</span>을 작성해 주세요
          </p>
          <div className="h-full py-[20px] px-[30px] flex flex-col bg-gray100 border border-gray200 rounded-[8px] gap-[20px]">
            <input
              placeholder="제목을 작성해주세요"
              className="w-full border-b border-blue100 py-[8px]"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="문제를 작성해주세요"
              className="h-full px-[12px] py-[8px] bg-white border border-blue100 rounded-[8px] resize-none outline-none"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteQuestion;
