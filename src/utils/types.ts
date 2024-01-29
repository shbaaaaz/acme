interface ActionButtonType {
    id?: string;
    text: string;
    size?: string;
}
  
interface ImageType {
    altText: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
}
  
interface VideoType {
    youTubeVideoId: string;
}
  
interface HeroType {
    id?: string;
    title: string;
    description: string;
    actionButtons: ActionButtonType[];
    type: string;
}
  
interface CalloutType {
    id: string;
    title: string;
    description: string;
    actionButton: ActionButtonType;
    type: string;
}
  
interface FeatureSectionType {
    id: string;
    label?: string;
    title: string;
    cta: ActionButtonType;
    description: string;
    type: string;
    media: ImageType | VideoType;
    mediaAlignment: string;
}
  
  
  interface SectionType {
    id: string;
    blocks: (HeroType | FeatureSectionType | CalloutType)[];
  }
  
  interface PageType {
    content: {
      id: string;
      title: string;
      sections: SectionType[];
    };
  }

  interface PageMetadataType {
    content: {
      title: string;
      metadata: {
        pageTitle: string;
        pageDescription: string;
        ogImage: {
          url: string;
        }
      }
    }
  }

  type PageProps = {
    sections: SectionType[]
  }
  
export type { ActionButtonType, ImageType, VideoType, HeroType, CalloutType, FeatureSectionType, SectionType, PageType, PageMetadataType, PageProps };
  