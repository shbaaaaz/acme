import { VideoType } from "@/utils/types";


export const YouTubePlayer = ({ youTubeVideoId }: VideoType) => {
  return (
    <iframe
      className='w-full aspect-video'
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      src={`https://www.youtube.com/embed/${youTubeVideoId}`}
    ></iframe>
  );
}