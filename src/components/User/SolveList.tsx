const SolveList = ({}) => {
  return (
    <div className="pt-[20px] pb-[20px] flex flex-col gap-[30px]">
      <div className="bg-white flex flex-col gap-[7px]">
        <p className="h-[21px] text-medium14 text-gray400">전공</p>
        <div className="flex flex-row justify-between">
          <p className="text-medium16 text-gray800">백엔드 / Bakend</p>
          <p className="text-medium16 text-gray800">13</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-medium16 text-gray800">프론트엔드 / Frontend</p>
          <p className="text-medium16 text-gray800">1</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-medium16 text-gray800">안드로이드 / Android</p>
          <p className="text-medium16 text-gray800">0</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-medium16 text-gray800">임베디드 / Embeded</p>
          <p className="text-medium16 text-gray800">4</p>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-[7px]">
        <p className="h-[21px] text-medium14 text-gray400">CS</p>
        <div className="flex flex-row justify-between">
          <p className="text-medium16 text-gray800">자료구조</p>
          <p className="text-medium16 text-gray800">16</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-medium16 text-gray800">알고리즘</p>
          <p className="text-medium16 text-gray800">5</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-medium16 text-gray800">네트워크</p>
          <p className="text-medium16 text-gray800">0</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-medium16 text-gray800">운영체제</p>
          <p className="text-medium16 text-gray800">0</p>
        </div>
      </div>
    </div>
  );
};

export default SolveList;
