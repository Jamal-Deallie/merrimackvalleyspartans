import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 1rem;
  width: fit-content;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  span {
    font-size: 1.563rem;
  }
  div {
    fill: ${({ theme }) => theme.colors.tertiary};
    width: 1.5rem;
    height: 1rem;
  }
  &:hover {
    div {
      fill: ${({ theme }) => theme.colors.secondary};
      margin-left: 0.25rem;
    }
    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
