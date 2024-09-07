import { useState } from 'react';
import classNames from 'classnames';
import { MainItemsCategory } from '../../constants/index';
import { GoBack } from 'assets/Main';

const CardItems = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-[1302px] flex gap-[34px]">
      {MainItemsCategory.map((value, index) => {
        const isSelected = selectedIndex === index;
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={classNames(
              'relative flex flex-col justify-between h-[280px] pt-[32px] pl-[25px] pb-[10px] pr-[10px] rounded-xl cursor-pointer transition-all duration-500 ease-in-out',
              {
                'w-[1302px] scale-105': isSelected,
                'w-[300px] scale-100': !isSelected,
                hidden: !isSelected && selectedIndex !== null,
                flex: !(!isSelected && selectedIndex !== null),
              },
              value.backColor,
            )}
          >
            <div className="flex flex-col gap-2">
              <p
                className={classNames('text-bold24 text-white', {
                  'w-full': isSelected,
                  'w-[140px]': !isSelected,
                })}
              >
                {value.title}
              </p>
              {isSelected && <p className="text-semi16 text-white">{value.info}</p>}
            </div>
            {isSelected && (
              <a href="/main" className="flex items-center decoration-white hover:underline">
                <GoBack />
                <p className="text-semi16 text-white">홈으로 돌아가기</p>
              </a>
            )}
            <div className="absolute right-[10px] bottom-[10px]">
              <value.icon />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardItems;
