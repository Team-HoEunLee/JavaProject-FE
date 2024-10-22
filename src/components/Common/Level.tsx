import { Zero, One, Two, Three, Four } from '../../assets/Common/index';
import { useLevelStore } from 'stores/SelectedCategory';
import KeywordTag from './KeywordTag';

const Level = () => {
  const Images = [Zero, One, Two, Three, Four];
  const { levels, addLevels, updateLevels, resetLevels } = useLevelStore();

  const handleClickLevels = (index: number) => {
    if (Array.isArray(levels)) {
      const isExist = levels.includes(index);
      if (isExist) {
        updateLevels(index);
      } else {
        addLevels(index);
      }
    } else if (levels === '모든 난이도') {
      addLevels(index);
    }
  };

  return (
    <div className="flex gap-[12px]">
      <KeywordTag
        text="모든 난이도"
        selected={levels === '모든 난이도'}
        onClick={() => resetLevels()}
      />
      {Images.map((ImageComponent, index) => (
        <ImageComponent
          key={index}
          onClick={() => handleClickLevels(index)}
          className={`rounded-full cursor-pointer ${Array.isArray(levels) && levels.includes(index) && 'brightness-[0.9]'}`}
        />
      ))}
    </div>
  );
};

export default Level;
