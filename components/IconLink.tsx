import { HTMLAttributes, ReactNode } from 'react';
import { useCallback } from 'react';
import styles from '@/styles/components/IconLink.module.scss';

export type IconLinkProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: string;
};

const IconLink = ({ children, variant }: IconLinkProps) => {
  const getStyle = useCallback(() => {
    switch (variant) {
      case 'primary':
        return styles.primary;
        break;
      case 'secondary':
        return styles.secondary;
        break;
      case 'tertiary':
        return styles.tertiary;
        break;
      case 'transparent':
        return styles.transparent;
        break;
      case 'outline':
        return styles.outline;
        break;
    }
  }, [variant]);

  return (
    <div className={styles.container}>
      <div className={getStyle()}>
        <span>{children}</span>
        <div className={styles.icon}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 10'>
            <path
              fillRule='evenodd'
              d='M9.87918 9.89961L8.46497 8.48539l2.53663-2.53663H0v-2h10.9996L8.46508 1.41421 9.87929 0 14.829 4.94975l-.0001.00011-1.4141 1.4141-3.53562 3.53565zM12 4.94914v.00122l.0006-.00061L12 4.94914z'
              clipRule='evenodd'></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default IconLink;
