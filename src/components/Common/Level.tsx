import { useRecoilState } from 'recoil';
import { Zero, One, Two, Three, Four } from '../../assets/Common/index';
import { selectedLevelState } from 'atom/SelectedCategory';
import KeywordTag from './KeywordTag';

const Level = () => {
  const Images = [Zero, One, Two, Three, Four];
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedLevelState);
  const handleAllLevelsClick = () => {
    setSelectedIndex(selectedIndex === 0 ? null : 0);
  };

  const handleLevelClick = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div className="flex gap-[12px]">
      <KeywordTag
        text="모든 난이도"
        selected={selectedIndex === 0}
        onClick={handleAllLevelsClick}
      />
      {Images.map((ImageComponent, index) => (
        <ImageComponent
          key={index}
          onClick={() => handleLevelClick(index + 1)}
          className={`rounded-full cursor-pointer ${selectedIndex === index + 1 ? 'border-[2px] border-white' : 'border-none'}`}
        />
      ))}
    </div>
  );
};

export default Level;
