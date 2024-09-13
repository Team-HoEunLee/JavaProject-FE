import { ProblemExampleDummy } from '../../constants';
import InfoBox from './InfoBox';
import SubmitButton from 'components/Common/SubmitButton';

const QuestionSolving = () => {
  const answerSubmit = () => {
    console.log('제출되었습니다~');
  };

  return (
    <div className="w-full h-screen flex justify-center">
      {ProblemExampleDummy.map(
        (
          {
            title,
            number,
            relatedField,
            level,
            solvePerson,
            percentCorrect,
            solveState,
            problemValue,
          },
          index,
        ) => (
          <div key={index} className="w-[1302px] flex flex-col gap-[24px]">
            <div className="flex items-center gap-[16px] py-[12px] border-b border-main300">
              <p className="text-semi24">{title}</p>
              <p className="text-medium18 text-main300">{number}</p>
            </div>
            <div className="h-4/6 flex justify-between">
              <div className="w-[370px] flex flex-col justify-between">
                <InfoBox
                  relatedField={relatedField}
                  level={level}
                  solvePerson={solvePerson}
                  percentCorrect={percentCorrect}
                  solveState={solveState}
                />
                <SubmitButton text="답변 제출하기" onClick={answerSubmit} />
              </div>
              <div className="w-[900px] flex flex-col gap-[32px]">
                <div className="h-[60px] border-b-[2px] border-main200">
                  <p className="text-medium20">문제</p>
                </div>
                <p className="text-regular16 leading-[180%]">{problemValue}</p>
                <textarea
                  className="h-full border border-main200 px-[20px] py-[16px] rounded-[12px] resize-none outline-none"
                  placeholder="문제에 대한 답을 작성해주세요"
                ></textarea>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default QuestionSolving;
