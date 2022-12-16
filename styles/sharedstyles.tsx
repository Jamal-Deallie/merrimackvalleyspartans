import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
`;
const Main = styled.main`
  padding: 5rem 2rem;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 10.87vw;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
`;

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
`;

const Subheader = styled.h2`
  line-height: 1;
  font-size: clamp(1.77rem, calc(1.19rem + 1.87vw), 6.48rem);
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.tertiary};
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  font-family: Poppins;
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { Container, Main, Title, Description, CodeTag, Line, Subheader };
