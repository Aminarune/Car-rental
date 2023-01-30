import React from 'react';
interface TooltipProps {
  title: string;
  position?: 'right' | 'left' | 'top' | 'bottom';
  children: React.ReactNode;
  arrow?: boolean;
}
export const Tooltip: React.FC<TooltipProps> = ({ title, children, position = 'top', arrow = false }) => {
  const arr = [1, 2, [1, [2]], 3];
  arr.flat(Infinity);
  return (
    <div className="group relative h-fit max-h-max min-h-min w-fit min-w-min max-w-max bg-transparent">
      <span className="invisible absolute z-10 w-fit rounded bg-black px-2 py-1 text-center text-xs text-primary-0 group-hover:visible">
        {title}
      </span>
      {children}
    </div>
  );
};
