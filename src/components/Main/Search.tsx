import { useState } from 'react';
import { SearchIcon } from '../../assets/Main/index';

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchKeyword(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (searchKeyword === '') {
        return;
      } else {
        console.log(`${searchKeyword} 검색중`);
      }
    }
  };

  return (
    <div className="w-full flex items-center gap-[8px] border border-gray400 rounded-md pl-[20px] overflow-hidden">
      <SearchIcon />
      <input
        value={searchKeyword}
        onChange={(e) => handelChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        className="w-full py-[12px] text-medium16 outline-none"
        placeholder="문제 및 키워드를 검색해주세요."
      />
    </div>
  );
};

export default Search;
