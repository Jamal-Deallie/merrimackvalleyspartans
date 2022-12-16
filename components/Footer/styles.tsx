import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 0 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: white;
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
`;

export const BottomRow = styled.div`
  margin-top: 2rem;
  display: flex;
  font-size: 1.241rem;
  justify-content: space-between;
  padding-inline: clamp(3.94rem, calc(3.13rem + 4.02vw), 6rem);
`;
export const TopRow = styled.div`
  padding-inline: clamp(3.94rem, calc(3.13rem + 4.02vw), 6rem);
  margin-top: 4.5rem;
  margin-bottom: 2rem;
  display: flex;

  justify-content: space-between;
`;

export const InnerRow = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const Description = styled.div`
  max-width: 30%;
  h6 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
  }
`;

export const LinkContainer = styled.div`
  p {
    text-align: center;
  }
  div {
    display: flex;
    gap: clamp(5.25rem, calc(3.79rem + 7.32vw), 10rem);
  }
`;
