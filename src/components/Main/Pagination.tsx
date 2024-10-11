import { LeftArrow, LeftArrowSkip, RightArrow, RightArrowSkip } from 'assets/Main';
import { useEffect, useState } from 'react';

const allContentCount = 100;

interface IconButtonProps {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ children, isSelected, onClick }) => {
  return (
    <div
      className={`
        w-[30px]
        h-[30px]
        flex
        justify-center
        items-center
        rounded-[8px]
      hover:bg-gray200
        ${isSelected ? 'bg-blue100' : 'bg-white'}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const pageGroup = Math.ceil(selectedPage / 5);
  const firstPageNumber = (pageGroup - 1) * 5 + 1;
  const lastPageNumber = pageGroup * 5;

  const pageNumbers = Array.from(
    { length: lastPageNumber - firstPageNumber + 1 },
    (_, i) => firstPageNumber + i,
  );

  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage]);

  const handleClickedPrev = () => {
    setSelectedPage((prevSelectedPage) => {
      if (prevSelectedPage > 1) return prevSelectedPage - 1;
      return prevSelectedPage;
    });
  };

  const handleClickedNext = () => {
    setSelectedPage((prevSelectedPage) => {
      if (prevSelectedPage < allContentCount) return prevSelectedPage + 1;
      return prevSelectedPage;
    });
  };

  const handleClickedSkipPrev = () => {
    setSelectedPage((prevSelectedPage) => {
      if (prevSelectedPage <= 5) return 1;
      return (prevSelectedPage -= 5);
    });
  };

  const handleClickedSkipNext = () => {
    setSelectedPage((prevSelectedPage) => {
      if (prevSelectedPage >= allContentCount - 5) return allContentCount;
      return prevSelectedPage + 5;
    });
  };

  return (
    <div className="flex gap-[4px]">
      <IconButton>
        <LeftArrow onClick={handleClickedPrev} />
      </IconButton>
      <IconButton>
        <LeftArrowSkip onClick={handleClickedSkipPrev} />
      </IconButton>
      {pageNumbers.map((value) => (
        <IconButton
          key={value}
          onClick={() => setSelectedPage(value)}
          isSelected={value === selectedPage}
        >
          <p className={`${value === selectedPage ? 'text-white' : 'text-black'}`}>{value}</p>
        </IconButton>
      ))}
      <IconButton>
        <RightArrow onClick={handleClickedNext} />
      </IconButton>
      <IconButton>
        <RightArrowSkip onCLick={handleClickedSkipNext} />
      </IconButton>
    </div>
  );
};

export default Pagination;
