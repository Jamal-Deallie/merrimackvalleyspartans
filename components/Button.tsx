import { ReactNode, ButtonHTMLAttributes } from 'react';


type BaseProps = {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

const Button = ({
  onClick,
  children,
  color = 'primary',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button color={color} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
