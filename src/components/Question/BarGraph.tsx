import { Zero, One, Two, Three, Four } from 'assets/Common';
import getLevelIcon from '../../utils/getLevelIcon';

interface PropsType {
  level?: number;
  ratio?: number;
}

const BarGraph = ({ level = 0, ratio }: PropsType) => {
  const levelIcon = getLevelIcon(level);
  const fill = ratio ? (ratio / 100) * 400 : 10;

  const check = () => {
    console.log('ratio', ratio);
    console.log('fill', fill);
  };

  return (
    <div onClick={check} className="flex items-center gap-[10px]">
      <div>{levelIcon}</div>
      <div className="w-full h-[8px] rounded-[8px] overflow-hidden bg-gray200">
        <div className={`w-[${fill}px] h-full bg-green100`}></div>
        {/* <div className="box-border h-full bg-red" style={{ width: `${fill}px` }}></div> */}
      </div>
    </div>
  );
};

export default BarGraph;
