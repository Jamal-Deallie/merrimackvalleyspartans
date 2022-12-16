import { Section, Wrap, Description } from './styles';
import IconLink from '@/components/IconLink/IconLink';
import CustomImage from '@/components/CustomImage/CustomImage';

const Mission = () => {
  return (
    <Section>
      <Description>
        <p>
          Our <span>mission</span> is to <span>provide</span> a{' '}
          <span>positive</span> football and cheer <span>experience</span> by{' '}
          <span>supporting</span> each <span>athlete</span> to{' '}
          <span>reach</span> their fullest <span>potential</span> both on and
          off the <span>field</span>.
        </p>
        <IconLink variant={'tertiary'}>Read our Mission</IconLink>
      </Description>
      <Wrap>
        <CustomImage
          src='/images/placeholder.svg'
          alt='team'
          height_ratio={528.354}
          width_ratio={680.764}
          height={'40vh'}
          fit={'contain'}
        />
      </Wrap>
    </Section>
  );
};

export default Mission;
