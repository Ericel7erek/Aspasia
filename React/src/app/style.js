import styled from 'styled-components';

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
`