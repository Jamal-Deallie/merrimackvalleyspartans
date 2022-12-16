import IconLink from '@/components/IconLink/IconLink';
import CustomImage from '@/components/CustomImage/CustomImage';
import { Section, FlexContainer, Content, Wrap } from './styles';

type Props = {};

const Quote = (props: Props) => {
  return (
    <Section>
      <FlexContainer>
        <Wrap>
          <CustomImage
            src='/images/placeholder.svg'
            alt='team'
            height_ratio={528.354}
            width_ratio={680.764}
            width={'100%'}
            fit={'contain'}
          />
        </Wrap>

        <Content>
          <p>
            WE ARE OPTIMISTIC, EVOLVING AND ALWAYS READY TO CORRECT OURSELVES
          </p>
          <IconLink variant={'primary'}>Meet Our Team</IconLink>
        </Content>
      </FlexContainer>
    </Section>
  );
};

export default Quote;
