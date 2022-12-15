import { Container } from './styles';

type VideoProps = {
  mpegSrc: string;
  webmSrc?: string;
};

const Video = ({ mpegSrc, webmSrc }: VideoProps) => {
  return (
    <Container>
      <video width='100%' muted autoPlay loop>
        {/* <source src='/video-example.webm' type='video/webm' /> */}
        <source src={mpegSrc} type='video/mp4' />
        Sorry, your browser doesn't support videos.
      </video>
    </Container>
  );
};

export default Video;
