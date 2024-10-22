interface ProgressBarProps {
  percent: number;
}

const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray200 rounded-full h-2.5">
      <div className="bg-purple200 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
