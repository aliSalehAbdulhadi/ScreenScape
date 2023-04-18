import { Dispatch, SetStateAction } from 'react';

export interface videoPlayer {
  setAdvanceSlide: Dispatch<SetStateAction<boolean>>;
  videoId: string;
  controls?: boolean;
  autoplay?: boolean;
  autoSlide?: boolean;
  mute?: boolean;
  height?: string;
  width?: string;
}
