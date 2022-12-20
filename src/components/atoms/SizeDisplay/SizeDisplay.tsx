import { FC } from 'react';

interface SizeDisplayProps {
  parameter: string;
  value: number;
}

const SizeDisplay: FC<SizeDisplayProps> = ({ parameter, value }) => {
  return (
    <div className="flex flex-col items-center bg-slate-200 p-2 rounded-md">
      <span>{parameter}:</span>
      <span>
        <strong>{value}</strong>см
      </span>
    </div>
  );
};

export default SizeDisplay;
