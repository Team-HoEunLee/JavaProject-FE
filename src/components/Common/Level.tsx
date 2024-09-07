import { useState } from 'react';
import { Zero, One, Two, Three, Four } from '../../assets/Common/index';

const Level = () => {
  const images = [Zero, One, Two, Three, Four];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    console.log(index);
    setSelectedIndex(index);
  };

  return (
    <div className="flex gap-[12px]">
      {images.map((ImageComponent, index) => (
        <ImageComponent
          key={index}
          onClick={() => handleClick(index)}
          className={`rounded-full cursor-pointer ${selectedIndex === index ? 'border-[2px] border-white' : 'border-none'}`}
        />
      ))}
    </div>
  );
};

export default Level;
