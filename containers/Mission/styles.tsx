import styled from 'styled-components';

export const Section = styled.section`
  overflow: hidden;
  p {
    padding-inline: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 4.768rem;
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
  }
  span {
    color: ${({ theme }) => theme.colors.tertiary};
  }
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
