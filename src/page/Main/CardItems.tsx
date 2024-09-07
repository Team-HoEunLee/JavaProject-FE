import { useState } from 'react';
import { MainItemsCategory } from '../../constants/index';

const CardItems = () => {
  const [mainItemsClicked, setMainItemsClicked] = useState(false);

  return (
    <div className="flex gap-[34px]">
      {MainItemsCategory.map((value, index) => (
        <div
          key={index}
          className={`${mainItemsClicked ? 'w-full' : 'w-[300px]'} h-[280px] relative pt-[32px] pl-[25px] pb-[10px] pr-[10px] rounded-xl ${value.backColor}`}
        >
          <p className="w-[140px] text-bold24 text-white">{value.title}</p>
          <div className="absolute right-[10px] bottom-[10px]">
            <value.icon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
