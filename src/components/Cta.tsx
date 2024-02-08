import { ActionButtonType } from '@/utils/types';
import Link from 'next/link';



export const Cta = ({ text, size = "md" }: ActionButtonType) => {
  
  const sizeClass = {
    sm:'py-2.5 px-[18px] text-base',
    md: 'py-3 px-5 text-base',
    lg: 'py-4 px-7 text-lg'
  }
  return (
    <Link
      className={`box-border flex justify-center items-center bg-primary text-white font-medium border border-solid border-primary rounded-lg shadow-xs ${sizeClass[size]}`}
      href="#"
    >
      {text}
    </Link>
  );
};

