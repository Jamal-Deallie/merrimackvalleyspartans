import styled from 'styled-components';

export const Section = styled.section`
  overflow: hidden;

`;


export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
  height: fit-content;
  padding: 2rem 0;
`;

export const Description = styled.div`
  padding-top: clamp(1.6rem, calc(-3.73rem + 24.65vw), 10.26rem);
  padding-inline: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
  p {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 3.5vw;
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    span {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
