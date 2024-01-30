import { ActionButtonType } from '@/utils/types';
import Link from 'next/link';



export const Cta = ({ text, size = 'md', variant = "primary" }: ActionButtonType) => {
  
  const fontSizeClass = size && size !== 'md' ? `text-${size}` : 'text-base';
  const variationStylingClass = variant === "primary" ? "bg-primary text-white border border-solid border-primary rounded-lg shadow-sm": "bg-transparent";
  const ctaStyle = `box-border flex justify-center items-center font-medium px-7 py-4 ${fontSizeClass} ${variationStylingClass}`

  return (
    <Link
      className={ctaStyle}
      href="#"
    >
      {text}
    </Link>
  );
};

