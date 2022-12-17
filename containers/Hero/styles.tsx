import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
  height: auto;
`;

export const Heading = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  padding-inline: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
  p {
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.9vw;
    text-transform: capitalize;
    margin-bottom: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
    font-weight: 500;
  }

  div {
    overflow: hidden;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 9.87vw;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 102%;

  height: auto;
  overflow: hidden;
`;

export const OuterContainer = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
  height: auto;
  overflow: hidden;
`;
