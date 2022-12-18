import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    fonts: {
      body?: string;
      heading?: string;
    };
    spacing?: {
      xxl?: string
    }
  }
}
