import styled from 'styled-components';
import { CustomImageProps } from './CustomImage';

export const Wrap = styled.div<CustomImageProps>`
  position: relative;
  aspect-ratio: ${props => props.width_ratio} / ${props => props.height_ratio};
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
`;
