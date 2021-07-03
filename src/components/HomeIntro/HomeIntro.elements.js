import styled from "styled-components";
import BgImg from '../../assets/images/illustration-working.svg';
import {Container} from "../../globalStyles";

export const Box = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 50% auto;
    
    @media screen and (max-width: 767px) {
        background-image: none;
        height: auto;
    }
`;

export const ImageContainer = styled.div`
    display: none;
    
    @media screen and (max-width: 767px) {
        display: block;
        width: 100%;
        max-width: 500px;
        margin: auto;
        height: auto;
        overflow: hidden;
    }
`;

export const Image = styled.img`    
    
`;

export const TextContainer = styled(Container)`
    display: flex;
    justify-content: center;
    // align-items: center;
    height: calc(100vh - 80px);
    flex-direction: column;
    
    @media screen and (max-width: 767px) {
        height: auto
    }
    
    ${Container}
`;

export const Heading = styled.h1`
    font-size: 80px;
    line-height: 90px;
    font-weight: 700;
    max-width: 50%;
    color: #34313D;
    
    @media screen and (max-width: 1250px) {
        font-size: 56px;
        line-height: 66px;
    }     
    
    @media screen and (max-width: 960px) {
        text-align: center;
        font-size: 46px;
        line-height: 56px;
    }     

    @media screen and (max-width: 767px) {
        text-align: center;
        font-size: 40px;
        line-height: 50px;
        max-width: 100%;
        margin: 15px 0;
    } 
`;

export const Description = styled.p`
    font-size: 22px;
    max-width: 50%;
    color: #b0b0b0;
    line-height: 30px;
    max-width: 47%; 
    
    
   @media screen and (max-width: 960px) {
        font-size: 20px;
        line-height: 28px;
        text-align: center;
    }  
   @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 28px;
        max-width: 100%;
        text-align: center;
    } 
`;

export const BtnDiv = styled.div`
    margin: 20px 0 0 0;
    width: 300px;
    
    @media screen and (max-width: 960px) {
       width: 50%;
       padding: 0 50px;
    }     
    @media screen and (max-width: 767px) {
       width: 100%;
       max-width: 300px;
       margin: 15px auto 40px auto;
    } 
`;