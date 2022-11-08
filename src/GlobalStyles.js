import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@400;700&family=Oxygen:wght@300;400;700&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        background: #101522;
        color: #fff;
    }

    a {
        color: #f4f4f4;
        text-decoration: none;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
    padding: 0 30px;

`;

export const Heading = styled.h1`
    font-size: 3rem;
    margin: 1.75rem 0;
    line-height: 1.1;
    letter-spacing: 1px;
    word-spacing: 1px;
    max-width: 550px;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
    text-align: ${({alignCenter}) => (alignCenter ? 'center' : 'start')};

     @media screen and (max-width: 768px) {
        font-size: 2rem;        
    }
`;

export const SubHeading = styled.h2`
    font-size: 2.2rem;
    line-height: 1.1;
    word-spacing: 1px;
    margin: 1.75rem 0;
    max-width: 550px;
    color: ${({lightSubHeading}) => (lightSubHeading ? '#000' : '#fff')};
    text-transform: ${({upperCase}) => (upperCase ? 'uppercase' : 'normal')};
    opacity: ${({opacity}) => (opacity ? '80%' : '100%')};

    @media screen and (max-width: 768px) {
        font-size: 2rem;        
    }
`;

export const Text = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 1rem;
    line-height: 32px;
    font-size: 1.5rem;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    opacity: ${({opacity}) => (opacity ? '50%' : '100%')};
`;

export const Button = styled.button`
    border-radius: 4px;
    white-space: nowrap;
    color: #fff;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
    padding: ${({big}) => (big ? '12px 34px' : '10px 20px')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export default GlobalStyle;
