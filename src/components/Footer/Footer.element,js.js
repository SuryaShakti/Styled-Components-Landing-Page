import styled from 'styled-components';
import {Container} from "../../globalStyles";
import {Link} from "react-router-dom";


export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #232127;
`;

export const InnerContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    background: #232127;
    
    @media screen and (max-width: 960px) {
        height: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    ${Container}
`;

export const WideColumn = styled.div`
    padding: 50px 10px;
    flex: 23%;
    
    @media screen and (max-width: 960px){
        flex: 100%;
        text-align: center;
        padding: 20px 10px;
    }
`;


export const SmallColumn = styled.div`
    padding: 50px 10px;
    flex: 18%;
    color: #fff;
    
    @media screen and (max-width: 960px){
        text-align: center;
        padding: 20px 10px;
    }    
    @media screen and (max-width: 767px){
        flex: 100%;
    }
`;

export const Heading = styled.p`
    font-sie: 18px;
    font-weight: 700;
    margin-bottom: 15px;
`;

export const FooterLink = styled(Link)`
  color: #b0b0b0;
  display: flex;
  font-weight: 300;
  align-items: center;
  text-decoration: none;
  margin: 5px 0; 
  &:hover {
      color: #2acfcf;
      transition: all 0.3s ease;
    }
  @media screen and (max-width: 960px) {
    text-align: center;
    width: 100%;
    display: table;
  }
`;

export const LinksContainer = styled.div`
    display: flex;
    width: 100%;
    
    @media screen and (max-width: 960px){
        justify-content: center;
    }
`;

export const SocialLink = styled(Link)`
    margin: 0 12px; 
    display: flex;
    align-items: center;
    
    &:hover {
      color: #2acfcf;
      transition: all 0.3s ease;
    }
`;