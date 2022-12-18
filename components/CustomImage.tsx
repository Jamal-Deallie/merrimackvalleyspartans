import Image from 'next/image';

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
  fit,
}: CustomImageProps) => {
  return (
    <div
      style={{
        position: 'relative',
        height: height,
        width: width,
        aspectRatio: width_ratio / height_ratio,
      }}>
      <Image alt={alt} src={src} fill object-fit={fit} sizes='100%' />
    </div>
  );
};
export default CustomImage;
