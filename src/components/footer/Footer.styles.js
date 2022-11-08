import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
    background-color: #101522;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 0;
`;

export const FooterRow = styled.div`
    display: flex;

    @media screen  and (max-width: 979px) {
        display: flex;
        flex-direction: column;
    }

`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
`;

export const FooterLinkTitle = styled.h3`
    margin-bottom: 16px;
    font-size: ${({fontBig}) => (fontBig ? '1.4rem' : '1.1rem')};
    text-transform: ${({upperCase}) => (upperCase ? 'uppercase' : 'normal')};
`;

export const FooterText = styled.p`
    color: #fff;
    margin-bottom: 16px;
    opacity: ${({opacity}) => (opacity ? '50%' : '100%')};
    font-size: ${({sizeSmall}) => sizeSmall ? '12px' : '1.2rem' };
    line-height: 1.3;
`;

export const Form = styled.form`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 4px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 1rem;
    border: 1px solid #fff;

    &::placeholder {
        font-size: 1rem;
    }

    &:focus  {
        border: 1.5px solid #0467FB;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin: .5rem .5rem 0 0;
`;