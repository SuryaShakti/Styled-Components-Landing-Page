import React from 'react';
import {Box, BtnDiv, Description, Heading, Image, ImageContainer, TextContainer} from "./HomeIntro.elements";
import {Button, Container} from "../../globalStyles";
import ImageOne from '../../assets/images/illustration-working.svg';

const HomeIntro = () => {
    return (
        <>
            <Box>
                <ImageContainer>
                    <Image width={'100%'} src={ImageOne} />
                </ImageContainer>
                <TextContainer>
                    <Heading>
                        {'More than just shorter links'}
                    </Heading>
                    <Description>
                        {"Build your brand's recognition and get detailed insights of how your links are performing"}
                    </Description>
                    <BtnDiv>
                        <Button round primary>
                            {'Get Started'}
                        </Button>
                    </BtnDiv>
                </TextContainer>
            </Box>
        </>
    );
};

export default HomeIntro;