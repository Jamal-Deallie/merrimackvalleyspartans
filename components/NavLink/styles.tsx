import styled from 'styled-components';
import Link, { LinkProps } from 'next/link';

export const CustomLink = styled(Link)`
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-size: 1.563rem;
  color: white;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.secondary};
    top: 100%;
    left: 0;
    pointer-events: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background:${({ theme }) => theme.colors.secondary};
    top: 100%;
    left: 0;
    pointer-events: none;
  }
  &:before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }

  &:hover:before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
    transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
  }

  &:after {
    content: '';
    transform-origin: 0% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }

  &:hover:after {
    top: calc(100% + 4px);
    transform-origin: 100% 50%;
    transform: scale3d(1, 1, 1);
    transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
  }
`;
