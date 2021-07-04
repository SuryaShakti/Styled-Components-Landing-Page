import React from 'react';
import {Box, Description, Heading, Image, ImageDiv, InnerContainer} from "./Card.element";

const Card = ({image, title, description,marginBottom}) => {

    return (
        <>
            <Box mb={marginBottom}>
                <InnerContainer>
                    <ImageDiv>
                        <Image src={image} alt={'alternate text'} />
                    </ImageDiv>
                    <Heading>
                        {title}
                    </Heading>
                    <Description>
                        {description}
                    </Description>
                </InnerContainer>
            </Box>
        </>
    );
};

export default Card;