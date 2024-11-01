import React from "react";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-blue-500 text-xs font-medium text-center p-0.5 leading-none rounded-full"
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
};

export default ProgressBar;
