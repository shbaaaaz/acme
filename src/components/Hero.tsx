import { HeroType } from "@/utils/types";
import { Cta } from "./Cta";

export const Hero = ({ title, description, actionButtons }: HeroType) => {
  return (
    <div className='md:px-8 flex flex-col items-center gap-8 md:gap-12'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-center'>{title}</h1>
        <p className='text-lg md:text-xl text-center md:w-3/4'>{description}</p>
      </div>
      <div className='self-stretch md:self-center flex flex-col gap-4 md:flex-row md:flex-wrap'>
        {actionButtons.map((cta) => (
          <Cta key={cta.id} text={cta.text} />
        ))}
      </div>
    </div>
  );
};

