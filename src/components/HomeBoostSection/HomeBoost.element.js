import styled from 'styled-components';
import WebBg from '../../assets/images/bg-boost-desktop.svg';
import MobBg from '../../assets/images/bg-boost-mobile.svg';

export const Box = styled.div`
    width: 100%;
    height: auto;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    background: #3b3054;
    background-image: url(${WebBg});
    background-size: cover;
    background-repeat: no-repeat;
    
    @media screen and (max-width: 767px){
        background-image: url(${MobBg});
    }
`;

export const Heading = styled.h1`
    font-size: 46px;
    line-height: 56px;
    font-weight: 700;
    margin-bottom: 20px;  
    color: #fff;
    text-align: center;
    
    @media screen and (max-width: 767px) {
        font-size: 28px;
        line-height: 36px;
    }
`;


export const BtnDiv = styled.div`
    width: 160px;
    margin: 20px 0 0 0;
    
    @media screen and (max-width: 767px){
       width: 100%;
       max-width: 200px;
    }
`;