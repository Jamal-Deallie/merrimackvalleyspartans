import styled from 'styled-components';
type AccordionProps = {
  open?: boolean;
};

export const ToggleBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 1rem 0;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div``;
export const Container = styled.div`
  color: ${({ theme }) => theme.colors.tertiary};
  position: relative;
  height: fit-content;
  width: 100%;
`;
export const Question = styled.div`
  p {
    text-transform: uppercase;
    font-size: 1.563rem;
  }
`;

export const Arrow = styled.div`
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 50%;
  fill: ${({ theme }) => theme.colors.tertiary};
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Answer = styled.div`
  height: 100%;
  overflow: hidden;
  height: auto;
`;

export const Outer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Inner = styled.div`
  height: 0px;
  padding-top: 1.5625em;
  padding-bottom: 2.5em;
  overflow: hidden;
  p {
    margin-top: 2.5rem;
    font-size: 1.563rem;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
