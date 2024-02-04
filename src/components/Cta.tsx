import { ActionButtonType } from '@/utils/types';
import Link from 'next/link';



export const Cta = ({ text, size }: ActionButtonType) => {
  const fontSizeClass = size && size !== 'md' ? `text-${size}` : 'text-base';
  return (
    <Link
      className={`box-border flex justify-center items-center bg-primary text-white font-medium px-7 py-4 border border-solid border-primary rounded-lg shadow-sm ${fontSizeClass}`}
      href="#"
    >
      {text}
    </Link>
  );
};

