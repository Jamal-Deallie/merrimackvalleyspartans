import styled from 'styled-components';

export const Container = styled.div`
  padding-top: clamp(1.13rem, calc(-1.48rem + 13.05vw), 7.81rem);
  padding-inline: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
  gap: clamp(3.94rem, calc(3.72rem + 1.1vw), 4.5rem);
  width: 100%;
  position: relative;
  height: auto;
  padding: clamp(1.13rem, calc(-1.48rem + 13.05vw), 7.81rem)
    clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem)
    clamp(4.13rem, calc(1.34rem + 13.9vw), 11.25rem)
    clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
`;

export const Heading = styled.div`
  h1 {
    margin: 0;
    font-size: 7.87vw;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 1;
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.563rem;
  }
`;

export const Accordions = styled.div`
  max-width: 50%;
  margin-left: auto;
  position: relative;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: fit-content;
  width: 50%;
  margin-left: auto;
`;
