import styled, {css, keyframes, createGlobalStyle} from 'styled-components';
import font from '../font/Nicolast.ttf';

const desktopWidth = 996
const desktop = `@media (min-width: ${desktopWidth}px)`
const mobile = `@media (max-width: ${desktopWidth}px)`
export const GlobalStyle = createGlobalStyle`
body{
    background-color: #ADD8E6
}
@font-face {
    font-family: Nicolast;
    src: url(${font});
}
`
const BigText = css`
font-family: Nicolast;
`;
const animation = keyframes`
   0% {
       transform: rotate(0deg);
   }
   100% {
       transform: rotate(360deg);
   }
   `
export const Box = styled.div`
    background-color: red;
    width: 300px;
    height: 300px;
    background-color: ${({color}) => color ? 'green' :'red'};
    `
export const PopUp = styled.div`
display: ${({visible}) => visible? 'block' : 'none'}; 
background-color: red;
    width: 300px;
    height: 300px;
    &:hover {
    background-color: paleGreen
}
`

export const Rectangulo = styled(Box)`
  width: 800px;
  height: 100px;
  ${BigText}
  /* animation: 5s linear infinite ${animation}; */
`;

const statusBarAnimation = (level) => keyframes`
    to{   width: ${level+ '%'}; }
`;

export const StatusBarContainer = styled.div`
        background-color: darkkhaki;
        height: 10px;
        width:0;
        animation: ${({ level }) => statusBarAnimation(level)} 1s forwards;
`;

export const StyleComponent1= styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: red;
width: 300px;
height: 300px;
transition: 1s;
${mobile}{
    width: 100% !important;
}
`
export const StyleComponent2= styled(StyleComponent1)`
width: 400px;
border-radius: 40%;
${BigText}
&:hover{
    background-color: blue;
}
`
export const P = styled.p`
background-color: ${({color}) => color ? 'green' :'transparent'};
`