import styled from 'styled-components';

export const Section = styled.div`
  margin: clamp(5.25rem, calc(3.79rem + 7.32vw), 20rem) 0;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`

  p {
    font-size: 3.6vw;
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
