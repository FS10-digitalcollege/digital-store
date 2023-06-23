
import { useState } from "react";
import styled from "styled-components";

const Banners = () => {

    const [bannerActive, setBannerActive ] = useState(1);

    return(
        <>
            <Carrossel>
                <CarrosselContainer data-position={bannerActive}>
                    <CarrouselItem>{bannerActive}</CarrouselItem>
                    <CarrouselItem>2</CarrouselItem>
                    <CarrouselItem>3</CarrouselItem>
                    <CarrouselItem>4</CarrouselItem>
                </CarrosselContainer>
                <CarrouselPill>
                    <Pill onClick={() => setBannerActive(1)} className={bannerActive == 1 && 'active'} />
                    <Pill onClick={() => setBannerActive(2)} className={bannerActive == 2 && 'active'} />
                    <Pill onClick={() => setBannerActive(3)} className={bannerActive == 3 && 'active'} />
                    <Pill onClick={() => setBannerActive(4)} className={bannerActive == 4 && 'active'} />
                </CarrouselPill>
            </Carrossel>
        </>
    );
}

const Carrossel = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`;
const CarrosselContainer = styled.ul`
    width: calc(100vw * 4);
    height: 550px;
    background-color: red;
    display: flex;
    position: relative;
    transition: all 300ms ease;
    &[data-position='1']{
        left: 0;
    }
    &[data-position='2']{
        left: -100vw;
    }
    &[data-position='3']{
        left: -200vw;
    }
    &[data-position='4']{
        left: -300vw;
    }
`;

const CarrouselItem = styled.li`
    width: 100vw;
    height: 100%;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150px;
    &:nth-child(2){
        background-color: yellow;
    }
    &:nth-child(3){
        background-color: green;
    }
    &:nth-child(4){
        background-color: blueviolet;
    }
`;

const CarrouselPill = styled.ul`
    display: flex;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    gap: 10px;
`;

const Pill = styled.li`
    width: 14px;
    height: 14px;
    border: 2px solid red;
    border-radius: 10px;
    &.active{
        background-color: red;
    }
`;

export default Banners;