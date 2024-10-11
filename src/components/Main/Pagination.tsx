import { LeftArrow, LeftArrowSkip, RightArrow, RightArrowSkip } from 'assets/Main';

const Pagination = () => {
  return (
    <div className="flex gap-[4px]">
      <div className="w-[30px] h-[30px] flex justify-center items-center rounded-[8px]">
        <LeftArrow />
      </div>
      <div className="w-[30px] h-[30px] flex justify-center items-center rounded-[8px]">
        <LeftArrowSkip />
      </div>
      {[1, 2, 3, 4, 5].map((value) => (
        <div
          key={value}
          className="w-[30px] h-[30px] flex justify-center items-center rounded-[8px]"
        >
          <p className="text-black">{value}</p>
        </div>
      ))}
      <div className="w-[30px] h-[30px] flex justify-center items-center rounded-[8px]">
        <RightArrow />
      </div>
      <div className="w-[30px] h-[30px] flex justify-center items-center rounded-[8px]">
        <RightArrowSkip />
      </div>
    </div>
  );
};

export default Pagination;
