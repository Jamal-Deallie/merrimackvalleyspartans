import React from 'react';
import Image from 'next/image';
import { Wrap } from './styles';

export type CustomImageProps = {
  src?: string;
  alt?: string;
  height_ratio?: number;
  width_ratio?: number;
  height?: string;
  width?: string;
  fit?: string;
};

const CustomImage = ({
  src,
  alt,
  height_ratio,
  width_ratio,
  height,
  width,
  fit
}: CustomImageProps) => {
  return (
    <Wrap
      width_ratio={width_ratio}
      height_ratio={height_ratio}
      height={height}
      width={width}>
      <Image alt={alt} src={src} fill object-fit={fit} sizes='100%' />
    </Wrap>
  );
};
export default CustomImage;
