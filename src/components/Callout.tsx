import { CalloutType } from '@/utils/types';
import { Cta } from './Cta';

export const Callout = ({ title, description, actionButton }: CalloutType) => {
  return (
    <div className='md:px-8'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0 bg-dark rounded-2xl text-white p-8 md:p-16'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-inherit'>{title}</h2>
          <p className='text-inherit'>{description}</p>
        </div>
        <div>
          <Cta text={actionButton.text} size={actionButton.size}/>
        </div>
      </div>
    </div>
  );
};

