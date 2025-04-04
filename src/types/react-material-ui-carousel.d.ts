declare module 'react-material-ui-carousel' {
  import { SxProps, Theme } from '@mui/material';
  import React from 'react';

  interface CarouselProps {
    autoPlay?: boolean;
    interval?: number;
    animation?: 'fade' | 'slide';
    navButtonsAlwaysVisible?: boolean;
    navButtonsProps?: {
      style?: React.CSSProperties;
    };
    indicators?: boolean;
    sx?: SxProps<Theme>;
    children: React.ReactNode;
  }

  const Carousel: React.FC<CarouselProps>;
  export default Carousel;
} 