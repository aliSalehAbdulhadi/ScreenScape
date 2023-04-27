'use client';

export interface videoPlayerInterface {
  onEnd?: Function;
  onReady?: Function;
  onError?: Function;
  videoId: string;
  controls?: boolean;
  autoplay?: boolean;
  stopVideo?: boolean;
  playVideo?: boolean;
  pauseVideo?: boolean;
  mute?: boolean;
  reloadVideo?: boolean;
  height?: string;
  width?: string;
}

export interface SignInInterface {
  email: string;
  password: string;
}

export interface SignUpInterface {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
