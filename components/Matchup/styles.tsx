import styled from 'styled-components';

export const Card = styled.div`
  max-width: 80rem;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const Line = styled.div`
  margin-top: 0.5vh;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Location = styled.div`
  display: flex;
  svg {
    width: 2rem;
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;
