import styled from "styled-components";

export const Box = styled.div`
    width: 30%;
    background: #fff;
    border-radius: 5px;
    margin-bottom: ${({mb}) => (mb ? mb : 0)};
    
    @media screen and (max-width: 767px){
        width: 100%;
        margin-bottom: 0px;
        margin: 35px 0;
    }
`;

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0 40px;
    flex-direction: column;
    margin-top: -40px;
    
     @media screen and (max-width: 767px){
        padding: 0 20px;
    }
`;

export const ImageDiv = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #34313D;
    margin-bottom: 10px;
    
    @media screen and (max-width: 767px){
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Image = styled.img`
    width: 35px;
`;

export const Heading = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: #34313D;
    margin: 20px 0;
    
    @media screen and (max-width: 767px){
        font-size: 18px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    color: #b0b0b0;
    line-height: 26px;
    width: 100%;
    margin-bottom: 30px;
`;