import styled, { css } from 'styled-components';
import { IconLinkProps } from './IconLink';

const COLOR = {
  primary: css`
    span {
      font-size: 1.563rem;
      color: ${({ theme }) => theme.colors.tertiary};
    }
    div {
      fill: ${({ theme }) => theme.colors.tertiary};
      width: 1.5rem;
      height: 1rem;
    }

    &:hover {
      div {
        fill: ${({ theme }) => theme.colors.primary};
        margin-left: 0.25rem;
      }
      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  `,
  secondary: css`
    span {
      font-size: 1.563rem;
      color: ${({ theme }) => theme.colors.tertiary};
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
  `,
  tertiary: css`
    span {
      font-size: 1.563rem;
      color: ${({ theme }) => theme.colors.tertiary};
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
  `,
};
export const Wrap = styled.div<IconLinkProps>`
  margin: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem) 0
    clamp(2.63rem, calc(2.48rem + 0.73vw), 3rem);
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  ${props => props.variant && COLOR[props.variant]}
`;
