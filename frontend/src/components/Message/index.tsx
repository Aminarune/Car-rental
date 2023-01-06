import React from 'react';
interface MessageProps {
  message?: string;
}
const Message: React.FC<MessageProps> = () => {
  return <div className="relative w-fit rounded-xl bg-slate-100 px-2 py-1 text-black">abcxyz</div>;
};
export { Message };
