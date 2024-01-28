import Link from 'next/link';

type CtaProps = {
  text: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Cta = ({ text, size }: CtaProps) => {
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

