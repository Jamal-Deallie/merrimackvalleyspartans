import styled from 'styled-components';

export const MenuBtn = styled.button`
  display: none;
  position: fixed;
  right: 0;
  margin: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
  height: 5rem;
  width: 15rem;
  border-radius: 5rem;
  background-color: transparent;
  border: 1.5px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  cursor: pointer;
  z-index: 15;
  font-family: ${({ theme }) => theme.fonts.heading};

  justify-content: center;
  align-items: center;
  font-size: 1.9rem;
  letter-spacing: 1px;
  position: relative;

  div:first-of-type {
    height: 2.5rem;
    display: flex;
    justify-content: center;
    line-height: 1.5;
    margin-left: 0.5rem;
  }

  div:last-of-type {
    position: absolute;
    line-height: 1.5;
    margin-inline: auto;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Open = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  line-height: 1.5;
  margin-left: 0.5rem;
`;

export const Close = styled.div`
  position: absolute;
  line-height: 1.5;
  width: 12rem;
  margin-inline: auto;
`;

export const Menu = styled.div`
  display: none;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: 'transparent';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;



export const Links = styled.div`
  z-index: 10;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`;

export const Top = styled.ul`
  padding-inline: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
  list-style: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: clamp(9.1rem, calc(5.82rem + 16.39vw), 22.21rem);
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(2.17rem, calc(0.9rem + 6.38vw), 7.28rem);
    text-transform: uppercase;
    transition: all ease-in-out 250ms;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export const Bottom = styled.div`
  padding-inline: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  div:first-of-type {
    ul {
      margin-top: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
    }
  }

  p {
    font-size: 1.563rem;
  }

  p:nth-of-type(2) {
    margin: 0.25rem 0;
  }
  p:nth-of-type(1) {
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;
