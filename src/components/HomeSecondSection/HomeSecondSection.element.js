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
    position: relative;
    overflow: hidden;
    
    background: ${({loading}) => (loading ? '#c1c1c1' : '#3b3054')};
    background-image: ${({loading}) => (loading ? 'none' : `url(${WebBg})`)};
    background-size: cover;
    background-repeat: no-repeat;
    z-index: ${({loading}) => (loading ? 1 : 0)};
    
    
    ${({ loading }) => loading && `
     :after {
        display: block;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        background: -webkit-gradient(linear, left top,
                    right top, from(transparent), 
                    color-stop(rgba(255, 255, 255, 0.2)),
                    to(transparent));

        background: linear-gradient(90deg, transparent,
                rgba(255, 255, 255, 0.2), transparent);
        animation: loading 0.8s infinite; 
    }

       @keyframes loading {
        100% {
            transform: translateX(100%);
        }
    }
  `}
    
    @media screen and (max-width: 767px){
        background-image: ${({loading}) => (loading ? 'none' : `url(${MobBg})`)};
        flex-direction: column;
        padding: 10px 10px;
        justify-content: center;
        margin-bottom: 0px;
    }
    
`;

export const LoadingDiv = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background: #e5e5e5;
    
    @media screen and (max-width: 767px){
        height: 50px;
        margin: 10px 0;
    }
`;

export const SearchBox = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: ${({error}) => (error ? '2px solid red' : 'none')};
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
        margin-Bottom:  ${({error}) => (error ? '5px' : '15px')};
    }    
`;

export const SearchDiv = styled.div`
    width: 100%;
    margin-bottom: ${({error}) => (error ? '-23px' : '0')};
    
    @media screen and (max-width: 767px){
        margin-bottom: ${({error}) => (error ? '15px' : '0')};
    }
`;

export const ErrorMessage = styled.label`
     @media screen and (max-width: 767px){
       margin: 10px 0; 
    }  
`;


export const BtnDiv = styled.div`
    margin-left: 15px;
    width: 160px;
    
    @media screen and (max-width: 767px){
        margin-left: 0;
        width: 100%;
        max-width: 450px:
        margin-top: 30px;
    }
`;

export const ShortCodeContainer = styled.div`
    width: 100%;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    display: flex; 
    text-wrap: wrap;
    margin: 10px 0;
    align-items: center;
    
    @media screen and (max-width: 767px){
        flex-direction: column;
        align-items: flex-start;
        margin: 20px 0;
    }
`;

export const OrginalLink = styled.p`
    font-size: 20px;
    overflow-wrap: break-word;
    font-weight: 500;
    flex: 1;
    
    @media screen and (max-width: 767px){
        font-size: 17px;
    }
`;

export const ShortLink = styled.p`
    font-size: 20px;
    overflow-wrap: break-word;
    font-weight: 500;
    color: #2acfcf;
    margin: 0 10px;
    
    @media screen and (max-width: 767px){
        font-size: 17px;
        margin: 8px 0;
    }
`;

export const BtnDiv1 = styled.div`
    width: 100%;
    max-width: 180px;
    
    @media screen and (max-width: 767px){
        max-width: 100%;        
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
