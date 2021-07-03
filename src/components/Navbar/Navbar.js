import React, {useEffect, useState} from 'react';
import {
    LinksContainer,
    LinksDiv,
    MobileIcon,
    Nav,
    NavbarContainer, NavBtnLink, NavItem, NavItemBtn,
    NavLink,
    NavLogoContainer,
    NavMenu
} from "./Navbar.elements";
import Logo from '../../assets/images/logo.svg';
import {Button} from "../../globalStyles";
import {FaBars, FaTimes} from "react-icons/all";


const Navbar = () => {

    const [click, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setClicked(false);
    const handleClick = () => setClicked(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogoContainer to={'/'}>
                        <img src={Logo} />
                    </NavLogoContainer>
                    {/*<LinksContainer>*/}
                    {/*    <div>*/}
                    {/*        <NavLink to={'/services'}>*/}
                    {/*            {'Services'}*/}
                    {/*        </NavLink>*/}
                    {/*    </div>*/}
                    {/*</LinksContainer>*/}
                    <MobileIcon onClick={() => setClicked(!click)}>
                        {click ? <FaTimes /> : <FaBars /> }
                    </MobileIcon>
                    <NavMenu click={click} onClick={handleClick}>
                        <LinksDiv>
                            <NavItem>
                                <NavLink to={'/features'}>
                                    {'Features'}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/prices'}>
                                    {'Prices'}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/resources'}>
                                    {'Resources'}
                                </NavLink>
                            </NavItem>
                        </LinksDiv>
                        <LinksDiv>
                            <NavItem>
                                <NavLink to={'/login'}>
                                    {'Login'}
                                </NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/sign-up'>
                                        <Button round primary>{'Sign Up'}</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/sign-up'>
                                        <Button round onClick={closeMobileMenu} primary>
                                            {'Sign Up'}
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </LinksDiv>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;