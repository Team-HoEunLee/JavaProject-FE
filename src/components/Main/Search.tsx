import { SearchIcon } from '../../assets/Main/index';

const Search = () => {
  return (
    <div className="w-full flex items-center gap-[8px] border border-gray400 rounded-md pl-[20px] overflow-hidden">
      <SearchIcon />
      <input
        className="w-full py-[12px] text-medium16 outline-none"
        placeholder="문제 및 키워드를 검색해주세요."
      />
    </div>
  );
};

export default Search;
