import styled from 'styled-components'

export const InfoContainer = styled.div`
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

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

    @media screen and (max-width: 768px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
`;

export const InfoColumn = styled.div`
    max-width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width: 768px) {
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    padding-bottom: 60px;
    max-width: 560px;
    
`;

/** Image **/

export const ImgWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
       display: flex;
       justify-content: center;
       align-items: center;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
`;