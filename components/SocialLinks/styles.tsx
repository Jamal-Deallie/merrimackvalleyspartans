import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const IconList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  gap: clamp(2.63rem, calc(2.48rem + 0.73vw), 3rem);
  li {
    height: 3rem;
  }
  svg {
    height: 3rem;
  }
`;
