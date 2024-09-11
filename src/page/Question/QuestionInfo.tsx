import { ProblemDataType } from '../../models/index';
import ProblemTag from 'components/Common/ProblemTag';
import { Zero, One, Two, Three, Four } from '../../assets/Common/index';

const mySkill = ['백엔드', '데브옵스', '인공지능'];

const getLevelIcon = (level: number) => {
  switch (level) {
    case 0:
      return <Zero />;
    case 1:
      return <One />;
    case 2:
      return <Two />;
    case 3:
      return <Three />;
    case 4:
      return <Four />;
    default:
      return null;
  }
};

const QuestionInfo = ({
  relatedField,
  level,
  solvePerson,
  percentCorrect,
  solveState,
}: ProblemDataType) => {
  return (
    <div className="flex flex-col px-[20px] pt-[20px] pb-[40px] gap-[30px] rounded-[20px] bg-main100">
      <div className="h-[36px] items-center flex gap-[20px] border-b-[1.5px] border-purple100">
        <p>현재 나의 기술스택</p>
        <div className="flex flex-wrap gap-[8px]">
          {mySkill.map((value, index) => (
            <p key={index} className="text-medium14 text-purple200">
              {value}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className="text-medium16">관련분야</p>
        <div className="flex flex-wrap gap-[8px]">
          {relatedField.map((value, index) => (
            <ProblemTag key={index} text={value} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-[30px]">
        <p className="w-[80px] text-medium16">난이도</p>
        <div className="flex items-center gap-[8px]">
          {getLevelIcon(level)}
          {/* <p className="text-medium14 text-gray600">하위권 문제입니다</p> */}
        </div>
      </div>
      <div className="flex items-center gap-[30px]">
        <p className="w-[80px] text-medium16">풀이한 사람</p>
        <p className="text-medium16">{solvePerson}</p>
      </div>
      <div className="flex items-center gap-[30px]">
        <p className="w-[80px] text-medium16">정답 비율</p>
        <p className="text-medium16">{percentCorrect}%</p>
      </div>
      <div className="flex items-center gap-[30px]">
        <p className="w-[80px] text-medium16">풀이여부</p>
        <p className={`text-medium16 ${solveState ? 'text-green300' : 'text-gray800'}`}>
          {solveState ? '이미 해결된 문제입니다' : '아직 풀이되지 않은 문제입니다'}
        </p>
      </div>
    </div>
  );
};

export default QuestionInfo;
