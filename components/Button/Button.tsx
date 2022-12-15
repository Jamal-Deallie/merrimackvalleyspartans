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
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <CustomButton {...props} variant={variant} disabled={disabled}>
      {children}
    </CustomButton>
  );
}
