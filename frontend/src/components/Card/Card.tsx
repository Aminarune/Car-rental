import React from 'react';
import { CapacityFilled, CarFilled, GasFilled, HeartFilled, TrashFilled } from '../../assets';
import { Button } from '../Button/Button';
import { useDeviceStore } from '../../stores';
import { Tooltip } from '../Tooltip/Tooltip';
interface CardProps {
  mobile?: boolean;
}
export const Card: React.FC<CardProps> = ({ mobile }) => {
  const [device] = useDeviceStore((state) => [state.deviceType]);

  if (mobile || device === 'mobile') {
    return (
      <div className="relative h-max w-[327px] rounded-xl bg-white p-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-secondary-500">CR - V</span>
            <span className="text-xs font-medium text-secondary-300">SUV</span>
          </div>
          <div>
            <HeartFilled size={16} color="#ED3F3F" />
          </div>
        </div>
        <div className="mt-4 mb-6 flex flex-row items-center justify-between">
          <img src="/src/assets/images/Car.png" alt="Failed to load" className="h-[64px] w-[160px]" />
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-row gap-2 text-xs font-medium text-secondary-300">
              <Tooltip title="Gas capacity">
                <GasFilled size={16} color="#90A3BF" />
              </Tooltip>
              <span>80L</span>
            </div>
            <div className="flex flex-row gap-2 text-xs font-medium text-secondary-300">
              <CarFilled size={16} color="#90A3BF" />
              <span>Manual</span>
            </div>
            <div className="flex flex-row gap-2 text-xs font-medium text-secondary-300">
              <CapacityFilled size={16} color="#90A3BF" />
              <span>6 People</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="h-max content-center leading-8">
            <span className="text-base font-bold text-secondary-500">$80.00/ </span>
            <span className="text-xs font-bold text-secondary-300">day</span>
          </div>
          <Button type="primary" size="medium">
            Rent Now
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-max w-[304px] rounded-xl bg-white p-6">
      <div className="mb-12 flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-secondary-500">CR - V</span>
          <span className="text-sm font-bold text-secondary-300">SUV</span>
        </div>
        <div>
          <HeartFilled size={24} color="#ED3F3F" />
        </div>
      </div>
      <img
        src="/src/assets/images/Car.png"
        alt="Failed to load"
        //  className="h-[100px] w-[250px] border border-solid border-black"
      />
      <div className="mt-12 mb-6 flex flex-row justify-between gap-2">
        <div className="flex flex-row gap-2 text-base text-secondary-300">
          <GasFilled size={24} color="#90A3BF" />
          <span>80L</span>
        </div>
        <div className="flex flex-row gap-2 text-base text-secondary-300">
          <CarFilled size={24} color="#90A3BF" />
          <span>Manual</span>
        </div>
        <div className="flex flex-row gap-2 text-base text-secondary-300">
          <CapacityFilled size={24} color="#90A3BF" />
          <span>6 People</span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="h-max content-center leading-11">
          <span className="text-xl font-bold text-secondary-500">$80.00/ </span>
          <span className="text-sm font-bold text-secondary-300">day</span>
        </div>
        <Button type="primary" size="large">
          Rent Now
        </Button>
      </div>
    </div>
  );
};
