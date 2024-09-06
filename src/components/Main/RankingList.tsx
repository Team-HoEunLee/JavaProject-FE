interface PropsType {
  number?: number;
  name?: string;
  score?: number;
}

const RankingList = ({ number, name, score }: PropsType) => {
  return (
    <div className="flex justify-between py-[10px]">
      <div className="flex gap-2">
        <p className="text-medium16 text-gray900">{`${number}위`}</p>
        <p className="text-medium16">{name}</p>
      </div>
      <p className="text-medium16 text-main200">{`${score}점`}</p>
    </div>
  );
};

export default RankingList;