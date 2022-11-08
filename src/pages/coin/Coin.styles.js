import styled from 'styled-components'
import { Button } from '../../GlobalStyles';

export const ContentWrapper = styled.div`
    padding: 70px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};


    @media screen and (max-width: 768px) {
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export const Content = styled.div`
    max-width: 740px;
    margin: .5rem auto;
    padding: .7rem 1rem;
    display: flex;
    flex-direction: column;
    background: #1b2030;
    box-shadow: 0 0 12px #18191b;
    border-radius: 8px;
`;

export const RankBtn = styled(Button)`
    margin: .5rem 0;
    width: 100px;

`;

export const Info = styled.div`
    display: grid;
    grid-template-columns: repeate(2, 1fr);
`;

export const InfoHeading = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`;

export const CoinPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoText = styled.p`
    padding-right: 1rem;
`;

export const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    width: 100%;

    @media screen and (max-width: 768px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
`;

export const StatsRow = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #888;
    margin: .6rem 0;
    padding-bottom: .5rem;
`;

export const StatsText = styled.p`
    color: #d3d3d3;
    margin: 0 30px;
`;

export const Table = styled.table`
    margin: .5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Tr = styled.tr`
    width: 100%;

     @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Td = styled.td`
    padding: 1rem;
    text-align: center;
`;

export const Th = styled.th`
    padding: .5rem 1.6rem;
    text-align: center;
    background-color: #333;
    font-weight: 700;
`;

export const About = styled.div`
    padding: 1rem;

    p {
        opacity: 70%;
        line-height: 1.7;
        word-spacing: 1.7;
        letter-spacing: 1.1;
    }
`;