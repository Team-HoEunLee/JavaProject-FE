import { useState } from 'react';
import { MainItemsCategory } from '../../constants/index';
import { GoBack } from 'assets/Main';

const CardItems = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-[1302px] flex gap-[34px]">
      {MainItemsCategory.map((value, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`relative flex flex-col justify-between h-[280px] pt-[32px] pl-[25px] pb-[10px] pr-[10px] rounded-xl cursor-pointer transition-all duration-500 ease-in-out
          ${selectedIndex === index ? 'w-[1302px]' : 'w-[300px]'}
          ${selectedIndex === index ? 'scale-105' : 'scale-100'}
          ${selectedIndex !== index && selectedIndex !== null ? 'hidden' : 'flex'}
          ${value.backColor}`}
        >
          <div className="flex flex-col gap-2">
            <p
              className={`text-bold24 text-white 
              ${selectedIndex === index ? 'w-full' : 'w-[140px]'}`}
            >
              {value.title}
            </p>
            <p
              className={`text-semi16 text-white 
              ${selectedIndex === index ? 'flex' : 'hidden'}`}
            >
              {value.info}
            </p>
          </div>
          <a
            href="/main"
            className={`flex items-center decoration-white hover:underline
            ${selectedIndex === index ? 'flex' : 'hidden'}`}
          >
            <GoBack />
            <p className="text-semi16 text-white">홈으로 돌아가기</p>
          </a>
          <div className="absolute right-[10px] bottom-[10px]">
            <value.icon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
