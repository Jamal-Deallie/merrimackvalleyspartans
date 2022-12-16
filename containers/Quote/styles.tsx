import styled from 'styled-components';

export const Section = styled.div`
  padding: clamp(1.6rem, calc(-3.73rem + 26.65vw), 15.26rem) 0;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-inline: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(2.63rem, calc(1.89rem + 3.66vw), 4.5rem);
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  p {
    font-size: 3vw;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
  height: 100%;
  width: 100%;
`;

export const Wrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
