import { Zero, One, Two, Three, Four } from 'assets/Common';
import getLevelIcon from '../../utils/getLevelIcon';

interface PropsType {
  level?: number;
}

const BarGraph = ({ level = 0 }: PropsType) => {
  const levelIcon = getLevelIcon(level);

  return (
    <div className="flex items-center gap-[10px]">
      <div>{levelIcon}</div>
      <div className="w-full h-[8px] rounded-[8px] bg-gray200">
        <div className=""></div>
      </div>
    </div>
  );
};

export default BarGraph;
