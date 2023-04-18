'use client';

export interface videoPlayer {
  onEnd?: Function;
  videoId: string;
  controls?: boolean;
  autoplay?: boolean;
  stopVideo?: boolean;
  playVideo?: boolean;
  pauseVideo?: boolean;
  mute?: boolean;
  height?: string;
  width?: string;
}
