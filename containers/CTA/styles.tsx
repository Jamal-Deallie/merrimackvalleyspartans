import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: clamp(1.6rem, calc(-3.73rem + 26.65vw), 15.26rem)
    clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Heading = styled.div`
  h1 {
    margin: 0;
    font-size: 7.587vw;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1;
    text-transform: uppercase;
  }
  h3 {
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme }) => theme.fonts.heading};
     font-size: 1.2vw;
     text-transform: uppercase;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  cursor: pointer;
  width: 15vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Hover = styled.div`
  background: ${props => props.theme.colors.primary};
  width: 15vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  clip-path: circle(0%);
  -webkit-clip-path: circle(0%);
  position: absolute;
  cursor: pointer;
`;

export const ButtonImage = styled.div`
  z-index: 2;
  filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.4));
  width: 15vw;
  padding: 1.5rem;
  margin-left: 1rem;
  /* margin-left: 1rem; */
  text-shadow: 2px 2px #000000;
  @media screen and (max-width: 800px) {
    /* width: 15vw;
    padding: 1.5rem;
    margin-left: 1rem; */
    /* margin-left: 1rem; */
    text-shadow: 2px 2px #000000;
  }
`;
