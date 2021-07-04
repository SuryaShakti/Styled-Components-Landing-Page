import styled from "styled-components";
import {Container} from "../../globalStyles";
import {Link} from "react-router-dom";

export const Nav = styled.nav`
    background-color : #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    
    ${Container}
`;

export const NavLogoContainer = styled(Link)`
    cursor: pointer;
    margin: 0 30px 0 0;
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        cursor :pointer;
        font-size: 1.8rem;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    justify-content: center;
    width: 80%;
    // height: 60vh;
    position: absolute;
    top: 85px;
    left: ${({ click }) => (click ? '50%' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    transform: translate(-50%, 0px);
    background: #3b3054;
    border-radius: 16px;
  }
`;

export const LinksDiv = styled.div`
    display: flex;
    
    @media screen and (max-width: 960px) {
        flex-direction: column;  
        width: 100%;        
    }
`;

export const NavItem = styled.li`
  height: 80px;
  // // border-bottom: 2px solid transparent;
  // &:hover {
  //   // border-bottom: 2px solid #2acfcf;
  //
  // }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60px;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLink = styled(Link)`
  color: #b0b0b0;
  display: flex;
  font-weight: 700;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
      color: #34313D;
      transition: all 0.3s ease;
    }
  @media screen and (max-width: 960px) {
    color: #fff;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
