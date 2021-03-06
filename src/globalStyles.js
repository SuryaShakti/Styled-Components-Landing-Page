import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    // padding-left: 50px; 
    // padding-right: 50px;
    
    @media screen and (max-width: 1340px) {
        padding-left: 30px; 
        padding-right: 30px;        
    } 
`;

export const Button = styled.button`
  border-radius: 4px;
  font-weight: 700;
  width: 100%;
  background: ${({ primary }) => (primary ? '#2acfcf' : '#2acfcf')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: ${({ round }) => (round ? '30px' : '5px')};
  
  
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#81f7f7' : '#81f7f7')};
  }
  :disabled {
    opacity: 0.4;
    background: #e5e5e5;
    
    &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #e5e5e5;
  }
  }
  
    ${({ copied }) => copied && `
        background: #34313D;
        border-radius: 4px;
        font-weight: 700;
        width: 100%;
        
        :hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background-color: #696969;
    }
  `}

  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyles;