import styled from "styled-components";

export const CarouselRow = styled.div`
    background: ${({ lightCarousel }) => (lightCarousel ? '#fff' : '#1b2030')};
    display: flex;
    flex-wrap: wrap;
    padding: .6rem;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    margin: 0 0 4rem;

    &:hover {
        transform: scale(1.04);
        transition: .3s ease-in-out;
        cursor: pointer;
    }
`;

export const CarouselHeader = styled.div`
    display: flex;
    align-items: center;
`

export const CarouselImg = styled.img`
    width: 50px;
    padding: .2rem 0;
    margin-right: .5rem;
`;