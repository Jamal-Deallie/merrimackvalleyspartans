  //@ts-nocheck
import {
  ButtonHTMLAttributes,
  ReactElement,
  useCallback,
  ReactNode,
} from 'react';
import { CustomButton } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  onClick?: () => void;
  icon?: ReactElement;
  width?: string;
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'transparent'
    | 'outline_primary'
    | 'outline_secondary';
  isLoading?: boolean;
};

export default function Button({
  children,
  icon,
  isLoading = false,
  className,
  onClick,
  variant,
  width,
  disabled = false,
  ...props
}: ButtonProps) {

  return (
    
    <CustomButton {...props} variant={variant} disabled={disabled} width={width}>
      {children}
    </CustomButton>
  );
}
