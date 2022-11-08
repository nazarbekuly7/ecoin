import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 0;

    @media screen and (max-width: 768px) {
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30em;
    max-width: 90%;
    margin: 0 auto;
    background: #1b2030;
    padding: 2rem;
    border-radius: 4px;
`;

export const InputWrapper = styled.div`
    margin: 10px 0;
`;

export const Input = styled.input `
    border-radius: 4px;
    width: 100%;
    padding: .7rem;
    outline: 0;
    background: #fff;
    border: none;

    &:focus  {
        border: 1.5px solid #0467FB;
    }

    ::placeholder {
        font-size: 1rem;
    }
`;

export const FormLink = styled(Link)`
    color: #eee;
    margin-bottom: 16px;
    border-bottom: 1px solid;
    opacity: 70%;
`