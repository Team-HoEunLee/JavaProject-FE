import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Zero, One, Two, Three, Four } from '../../assets/Common/index';
import { selectedLevelState } from 'atom/SelectedCategory';
import KeywordTag from './KeywordTag';

const Level = () => {
  const Images = [Zero, One, Two, Three, Four];
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedLevelState);
  const handleLevelClick = (index: number) => {
    if (index === -1) {
      if (selectedIndex === 0) {
        setSelectedIndex(null);
      } else {
        setSelectedIndex(0);
      }
    } else {
      if (selectedIndex === null) {
        setSelectedIndex(index);
      } else {
        setSelectedIndex(index === selectedIndex ? null : index);
      }
    }
  };

  return (
    <div className="flex gap-[12px]">
      <KeywordTag
        text="모든 난이도"
        selected={selectedIndex !== null && !selectedIndex}
        onClick={() => handleLevelClick(-1)}
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
