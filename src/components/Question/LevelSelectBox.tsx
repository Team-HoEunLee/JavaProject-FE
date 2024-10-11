import getLevelIcon from 'utils/getLevelIcon';
import classNames from 'classnames';

interface PropsType {
  level?: number;
  clicked?: boolean;
}

const borderColor = ['green50', 'pointGreen', 'blue400', 'blue500', 'pink200'];

const LevelSelectBox = ({ level = 0, clicked }: PropsType) => {
  const levelIcon = getLevelIcon(level);
  const selectColor = borderColor[level];

  const boxClass = classNames(
    'w-[100px] h-[100px] flex justify-center items-center border rounded-[20px]',
    `border-${selectColor}`,
    `${clicked ? `bg-${selectColor}` : 'bg-white'}`,
  );

  return <div className={boxClass}>{levelIcon}</div>;
};

export default LevelSelectBox;
