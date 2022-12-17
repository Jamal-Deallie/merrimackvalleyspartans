// import {
//   ButtonHTMLAttributes,
//   ReactElement,
//   useCallback,
//   ReactNode,
// } from 'react';
// import { CustomButton } from './styles';

// export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   children: string | ReactNode;
//   onClick?: () => void;
//   icon?: ReactElement;
//   width?: string;
//   color?:
//     | 'primary'
//     | 'secondary'
//     | 'tertiary'
//     | 'transparent'
//     | 'outline_primary'
//     | 'outline_secondary';
//   isLoading?: boolean;
// };

// export default function Button({
//   children,
//   icon,
//   isLoading = false,
//   className,
//   onClick,
//   color,
//   width,
//   disabled = false,
//   ...props
// }: ButtonProps) {
//   return (
//     <CustomButton {...props} color={color} disabled={disabled}>
//       {children}
//     </CustomButton>
//   );
// }

type Props = {};

const Button = (props: Props) => {
  return <div>Button</div>;
};

export default Button;
