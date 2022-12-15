import styled from 'styled-components';

export const ImageWrap = styled.div`
  position: relative;
  height: 7.5rem;
  width: auto;
  aspect-ratio: 60 / 123;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 10rem;
  position: relative;
`;

export const Inner = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  position: fixed;
  padding-inline: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
  z-index: 9;
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary}; */
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(3.94rem, calc(3.13rem + 4.02vw), 6rem);
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: clamp(3.94rem, calc(3.72rem + 1.1vw), 4.5rem);
`;
