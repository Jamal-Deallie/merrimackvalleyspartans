//@ts-nocheck
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const COLOR = {
  primary: css`
    color: ${({ theme }) => theme.colors.tertiary};
    background: ${({ theme }) => theme.colors.secondary};
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    outline: none;
    transition: all 0.2s;
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    outline: none;
    transition: all 0.2s;
  `,
  outline_secondary: css`
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;
    z-index: 3;
    background: transparent;
    border-color: ${({ theme }) => theme.colors.secondary};
    border-style: solid;
    border-width: 2px;
    border-radius: 4px;
    padding: 12px 40px;
    text-transform: uppercase;
    transition: all 0.2s linear;
    &:hover {
      color: white;
      background: ${({ theme }) => theme.colors.secondary};
      border-color: white;
      transition: all 0.2s linear;
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export const CustomButton = styled.button<ButtonProps>`
  font-size: 1.563rem;
  width: ${(props: { width: string }) => (props.width ? props.width : 'auto')};
  ${(props: { variant: string }) => props.variant && COLOR[props.variant]}
  ${props => props.disabled && DISABLED}
`;
