import React from 'react';
import {
    Box,
    FooterLink,
    Heading,
    InnerContainer,
    LinksContainer,
    SmallColumn,
    SocialLink,
    WideColumn
} from "./Footer.element,js";
import Logo from '../../assets/images/white-logo.svg';
import Social1 from '../../assets/images/icon-facebook.svg';
import Social2 from '../../assets/images/icon-twitter.svg';
import Social3 from '../../assets/images/icon-pinterest.svg';
import Social4 from '../../assets/images/icon-instagram.svg';

const Footer = () => {
    return (
        <>
            <Box>
                <InnerContainer>
                    <WideColumn>
                        <img src={Logo} alt={'logo'} />
                    </WideColumn>
                    <SmallColumn>
                        <Heading>
                            {'Features'}
                        </Heading>
                        <FooterLink to={'/link-shortening'}>
                            {'Link Shortening'}
                        </FooterLink>
                        <FooterLink to={'/branded-links'}>
                            {'Branded Links'}
                        </FooterLink>
                        <FooterLink to={'/analytics'}>
                            {'Analytics'}
                        </FooterLink>
                    </SmallColumn>
                    <SmallColumn>
                        <Heading>
                            {'Resources'}
                        </Heading>
                        <FooterLink to={'/blogs'}>
                            {'Blogs'}
                        </FooterLink>
                        <FooterLink to={'/developers'}>
                            {'Developers'}
                        </FooterLink>
                        <FooterLink to={'/support'}>
                            {'Support'}
                        </FooterLink>
                    </SmallColumn>
                    <SmallColumn>
                        <Heading>
                            {'Company'}
                        </Heading>
                        <FooterLink to={'/about'}>
                            {'About'}
                        </FooterLink>
                        <FooterLink to={'/our-team'}>
                            {'Our Team'}
                        </FooterLink>
                        <FooterLink to={'/careers'}>
                            {'Careers'}
                        </FooterLink>
                        <FooterLink to={'/contact'}>
                            {'Contact'}
                        </FooterLink>
                    </SmallColumn>
                    <WideColumn>
                        <LinksContainer>
                            <SocialLink to={'/facebook'}>
                                <img src={Social1} alt={''} />
                            </SocialLink>
                            <SocialLink to={'/twitter'}>
                                <img src={Social2} alt={''} />
                            </SocialLink>
                            <SocialLink to={'/pinterest'}>
                                <img src={Social3} alt={''} />
                            </SocialLink>
                            <SocialLink to={'/instagram'}>
                                <img src={Social4} alt={''} />
                            </SocialLink>
                        </LinksContainer>
                    </WideColumn>
                </InnerContainer>
            </Box>
        </>
    );
};

export default Footer;