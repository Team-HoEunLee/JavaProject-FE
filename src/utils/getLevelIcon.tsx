import { Zero, One, Two, Three, Four } from 'assets/Common';

interface LevelIconsDataType {
  [key: number]: JSX.Element;
}

const getLevelIcon = (index: number) => {
  const levelIcons: LevelIconsDataType = {
    0: <Zero />,
    1: <One />,
    2: <Two />,
    3: <Three />,
    4: <Four />,
  };

  const levelIcon = levelIcons[index] || null;

  return levelIcon;
};

export default getLevelIcon;
