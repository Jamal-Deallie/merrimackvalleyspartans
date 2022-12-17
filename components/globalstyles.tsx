import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Vaulto';
  src: url(/fonts/vaulto.woff2) format('woff2');
}

:root{
  --body-font:'Poppins';
  --header-font: 'Oswald';
  --primary-color: 'rgb(253, 97, 21)';
  --secondary-color: 'rgb(29, 29, 31)';
  --tertiary-color: 'rgb(248, 249, 252)';
  --heading-2: clamp(1.44rem, calc(-3.57rem + 25.06vw), 21.48rem);
}

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    
  }

  body{ 
    background-color: rgb(29, 29, 31);
  }




button{cursor: pointer;}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
  }

  p, span a, {
    font-family: 'Poppins', sans-serif;
  }
  ul{
    list-style: none;
  }
  
button{
  border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}

&::-moz-focus-inner {
    border: 0;
    padding: 0;
}
`;

export default GlobalStyle;
