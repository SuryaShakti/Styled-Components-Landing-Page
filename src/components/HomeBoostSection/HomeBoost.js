import React from 'react';
import {Box, BtnDiv, Heading} from "./HomeBoost.element";
import {Button} from "../../globalStyles";

const HomeBoost = () => {
    return (
        <>
            <Box>
                <Heading>
                    {'Boost Your Links Today'}
                </Heading>
                <BtnDiv>
                    <Button round primary>
                        {'Get Started'}
                    </Button>
                </BtnDiv>
            </Box>
        </>
    );
};

export default HomeBoost;