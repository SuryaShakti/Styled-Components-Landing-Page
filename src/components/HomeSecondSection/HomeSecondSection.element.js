import styled from "styled-components";
import {Container} from "../../globalStyles";
import WebBg from '../../assets/images/bg-shorten-desktop.svg';
import MobBg from '../../assets/images/bg-shorten-mobile.svg';

export const Box = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #dfdce6;
    padding: 80px 0;
`;

export const InnerContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -160px;
    
    @media screen and (max-width: 767px){
        margin-top: -150px;
    }
    
    ${Container}
`;

export const SearchBoxContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 40px;
    border-radius: 15px;
    margin-bottom: 50px;
    
    background: #3b3054;
    background-image: url(${WebBg});
    background-size: cover;
    background-repeat: no-repeat;
    
    @media screen and (max-width: 767px){
        background-image: url(${MobBg});
        flex-direction: column;
        padding: 10px 10px;
        justify-content: center;
        margin-bottom: 0px;
    }
    
`;

export const SearchBox = styled.input`
    flex: 1;
    height: 60px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 0 20px;
    font-size: 20px;
    color: #b0b0b0;
    
    @media screen and (max-width: 767px){
        flex: inherit;
        width: 100%;
        height: 50px;
        padding: 0 10px;
        font-size: 15px;
        margin-bottom: 20px; 
    }    
`;

export const BtnDiv = styled.div`
    margin-left: 15px;
    width: 160px;
    
    @media screen and (max-width: 767px){
        margin-left: 0;
        width: 100%;
        max-width: 450px:
        margin: 10px auto;
    }
`;

export const TextContainer = styled.div`
   width: 100%;
   text-align: center;
   margin: 80px 0;
`;

export const Heading = styled.h1`
    font-size: 36px;
    line-height: 45px;
    font-weight: 700;
    margin-bottom: 20px;  
    color: #34313D;
    
    @media screen and (max-width: 767px) {
        font-size: 28px;
        line-height: 36px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin: auto;
    line-height: 28px;
    width: 100%;
    max-width: 600px;  
    color: #b0b0b0;
    
     @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 26px;
    }
`;
