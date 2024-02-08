import { Cta } from './Cta';
import Image from 'next/image';
import { YouTubePlayer } from './YouTubePlayer';
import { FeatureSectionType } from '@/utils/types';
import { Space_Grotesk } from "next/font/google";


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin']
})

export const FeatureSection = ({
  label,
  title,
  description,
  cta,
  media,
  mediaAlignment,
}: FeatureSectionType) => {

  const flexDirectionDesktop =
    mediaAlignment && mediaAlignment === 'left'
      ? 'md:flex-row-reverse'
      : 'md:flex-row';
  return (
    <div
      className={`min-h-fit md:px-8 flex flex-col md:items-center gap-12 md:gap-24 ${flexDirectionDesktop}`}
    >
      <div className='flex flex-col gap-8 md:items-start md:w-1/2'>
        <div className='flex flex-col items-start gap-4'>
          <div className='flex flex-col items-start'>
            {label && <span className={`text-primary font-bold text-lg ${spaceGrotesk.className}`}>{label}</span>}
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
        {cta && (
          <div>
            <Cta text={cta.text} size={cta.size}/>
          </div>
        )}
      </div>
      {media && (
        <div className='md:p-10 md:bg-light md:rounded-3xl md:w-1/2'>
          {('altText' in media)  ? (
            <div className="relative h-[180px] md:h-[320px] flex justify-center items-center">
              <Image
                src={media.image.url}
                alt={media.altText}
                fill={true}
              />
            </div>
           
           
          ) : (
            <YouTubePlayer youTubeVideoId={media.youTubeVideoId} />
          )}
        </div>
      )}
    </div>
  );
};