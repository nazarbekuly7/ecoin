import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md'

export const CoinContainer = styled.div`
    margin: 4rem 0;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 1rem;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const SearchBtn = styled.button`
    border: none;
    background: #0467FB;
    color: #0467FB;
    width: 80px;
    border-radius: 0 4px 4px 0;
`;

export const SearchIcon = styled(MdSearch)`
    font-size: 2.1rem;
    cursor: pointer;
    background: #0467FB;
    color: #fff;

`;

export const SearchInput = styled.input`
    border-radius: 4px 0px 0 4px;
    width: 100%;
    padding: 10px 20px;
    outline: 0;
    background: #fff;
    border: none;

    &:focus  {
        border: 1.5px solid #0467FB;
    }

    ::placeholder {
        font-size: 1.2rem;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: #1b2030;
    box-shadow: 0 0 12px #18191b;
    border-radius: 8px;
    margin: 2rem 1rem;
    padding: 1rem;
    font-weight: bold;
`;

export const CoinRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1b2030;
    box-shadow: 0 0 12px #18191b;
    border-radius: 8px;
    margin: 1rem;
    padding: 1rem;

    &:hover {
        transform: scale(1.04);
        transition: .3s ease-in-out;
        cursor: pointer;
    }
`;

export const Text = styled.p`
    font-size: 1rem;
    margin-left: ${({marginLeft}) => (marginLeft ? '-2rem' :0)};
`;

export const ImgSymbol = styled.div`
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
    height: 40px;
    margin-right: 8px;
    width: auto;
`;

/** Card **/

export const CardContainer = styled.div`
    background-color: #1b2030;
    display: flex;
    flex-direction: column;
    padding: 22px;
    margin: 10px 0;
    width: 170px;
    height: 170px;
    border-radius: 24px;
    border: 1px solid #d3d3d3;
    box-shadow: rgba(0 0 0 / 12%) 0px 8px 24px;
    text-align: center;

    &:hover {
        box-shadow: rgba(0 0 0 / 20%) 0px 8px 24px;
    }
`;

export const CardLink = styled(Link)`
    &:hover {
    transform: scale(1.04);
    transition: .3s ease-in-out;
    cursor: pointer;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardImg = styled.img`
    width: 50px;
    margin: auto;
    padding: .2rem 0;
`;

export const CardHeading = styled.h5`
    font-size: 1rem;
`;

export const CardBody = styled.p`
    padding: .6rem 0;
`;

export const PriceChange = styled.span`
    font-size: 22px;
    color: ${({increase}) => (increase ? '#03C77A' : '#ff3b69')};
`;