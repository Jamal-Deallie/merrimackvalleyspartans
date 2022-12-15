import { Container, IconList } from './styles';
type Props = {};

const SocialLinks = ({}: Props) => {
  return (
    <Container>
      <IconList>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='svg-inline icon-Facebook'
            viewBox='0 0 25.72 25.72'>
            <g data-name='Layer 2'>
              <g data-name='Layer 1'>
                <path
                  d='M25.22 12.86A12.36 12.36 0 1 1 12.86.5a12.36 12.36 0 0 1 12.36 12.36Z'
                  style={{
                    fill: 'none',
                    stroke: '#1f304f',
                    strokeMiterlimit: 10,
                    strokeWidth: 1,
                  }}
                />
                <path
                  d='M13.7 9.19a2.26 2.26 0 0 1 0-.42.88.88 0 0 1 .1-.3.4.4 0 0 1 .27-.2 1.59 1.59 0 0 1 .49-.06h1.14V5.77h-1.78a2.73 2.73 0 0 0-2.22.8 3.62 3.62 0 0 0-.7 2.37v1.47H9.7v2.45H11V20h2.7v-7.14h1.78l.24-2.45h-2Z'
                  style={{
                    fill: '#1f304f',
                  }}
                />
              </g>
            </g>
          </svg>
        </li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='svg-inline icon-Instagram'
            viewBox='0 0 25.72 25.72'>
            <defs>
              <style>{'.cls-28{fill:#1f304f}'}</style>
            </defs>
            <g data-name='Layer 2'>
              <g data-name='Layer 1'>
                <path
                  d='M25.22 12.86A12.36 12.36 0 1 1 12.86.5a12.36 12.36 0 0 1 12.36 12.36Z'
                  style={{
                    fill: 'none',
                    stroke: '#1f304f',
                    strokeMiterlimit: 10,
                    strokeWidth: 1,
                  }}
                />
                <path
                  d='M17.12 15.18a1.94 1.94 0 0 1-1.94 1.94h-4.64a2 2 0 0 1-1.95-1.94v-4.64a2 2 0 0 1 1.95-1.94h4.64a1.94 1.94 0 0 1 1.94 1.94Zm-1.94-7.5h-4.64a2.86 2.86 0 0 0-2.86 2.86v4.64A2.86 2.86 0 0 0 10.54 18h4.64A2.86 2.86 0 0 0 18 15.18v-4.64a2.86 2.86 0 0 0-2.86-2.86'
                  className='cls-28'
                />
                <path
                  d='M12.86 14.61a1.75 1.75 0 1 1 1.75-1.75 1.75 1.75 0 0 1-1.75 1.75m0-4.42a2.67 2.67 0 1 0 2.67 2.67 2.67 2.67 0 0 0-2.67-2.67m2.78-.78a.67.67 0 0 0-.48.2.68.68 0 0 0-.19.47.71.71 0 0 0 .19.48.68.68 0 0 0 1 0 .71.71 0 0 0 .19-.48.68.68 0 0 0-.19-.47.67.67 0 0 0-.48-.2'
                  className='cls-28'
                />
              </g>
            </g>
          </svg>
        </li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='svg-inline icon-Twitter'
            viewBox='0 0 25.72 25.72'>
            <g data-name='Layer 2'>
              <g data-name='Layer 1'>
                <path
                  d='M17.89 9.09A2.69 2.69 0 0 0 19 7.56a4.83 4.83 0 0 1-1.61.67 2.38 2.38 0 0 0-3.64-.07 2.85 2.85 0 0 0-.74 2 3.55 3.55 0 0 0 .06.64 6.68 6.68 0 0 1-2.91-.86 7.31 7.31 0 0 1-2.31-2 2.93 2.93 0 0 0-.34 1.4 3 3 0 0 0 .3 1.33 2.86 2.86 0 0 0 .83 1 2.39 2.39 0 0 1-1.15-.36A2.83 2.83 0 0 0 8.08 13a2.53 2.53 0 0 0 1.45 1 2.5 2.5 0 0 1-.66.09 2.74 2.74 0 0 1-.48 0 2.76 2.76 0 0 0 .89 1.37 2.38 2.38 0 0 0 1.47.56 4.67 4.67 0 0 1-3.14 1.18 5.66 5.66 0 0 1-.61 0 6.61 6.61 0 0 0 3.89 1.25 6.85 6.85 0 0 0 2.53-.47 6.35 6.35 0 0 0 2-1.26 8.3 8.3 0 0 0 1.45-1.81 8.69 8.69 0 0 0 .9-2.14 8.55 8.55 0 0 0 .3-2.23 3.44 3.44 0 0 0 0-.36 5.67 5.67 0 0 0 1.27-1.44 4.68 4.68 0 0 1-1.46.43'
                  style={{
                    fill: '#1f304f',
                  }}
                />
                <path
                  d='M25.22 12.86A12.36 12.36 0 1 1 12.86.5a12.36 12.36 0 0 1 12.36 12.36Z'
                  style={{
                    fill: 'none',
                    stroke: '#1f304f',
                    strokeMiterlimit: 10,
                    strokeWidth: 1,
                  }}
                />
              </g>
            </g>
          </svg>
        </li>
      </IconList>
    </Container>
  );
};

export default SocialLinks;
