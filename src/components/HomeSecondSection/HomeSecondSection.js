import React from 'react';
import {Box, BtnDiv, InnerContainer, SearchBox, SearchBoxContainer, TextContainer, Heading, Description} from "./HomeSecondSection.element";
import {Button} from "../../globalStyles";

const HomeSecondSection = () => {
    return (
        <>
            <Box>
                <InnerContainer>
                    <SearchBoxContainer>
                        <SearchBox
                            placeholder={'Shorten a link here...'}
                        />
                        <BtnDiv>
                            <Button primary>
                                {'Shorten It!'}
                            </Button>
                        </BtnDiv>
                    </SearchBoxContainer>
                    <TextContainer>
                        <Heading>
                            {'Advanced Statistics'}
                        </Heading>
                        <Description>
                            {'Track how your links are performing across the web with our advanced statistics dashboard.'}
                        </Description>
                    </TextContainer>

                </InnerContainer>
            </Box>
        </>
    );
};

export default HomeSecondSection;