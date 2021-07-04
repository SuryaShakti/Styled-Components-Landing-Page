import React from 'react';
import Card from "../Card/Card";
import BrandRecognitionLogo from '../../assets/images/icon-brand-recognition.svg';
import {Box, Line} from "./CardContainer.elements";

const CardsContainer = () => {
    return (
        <Box>
            <Card
                image={BrandRecognitionLogo}
                title={'Brand Recognition'}
                description={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your client."}
            />
            <Card
                marginBottom={'-50px'}
                image={BrandRecognitionLogo}
                title={'Detailed Record'}
                description={"Gain insights into who is clicking your links. Knowing when and where people are engaging with your content helps inform better content."}
            />
            <Card
                marginBottom={'-100px'}
                image={BrandRecognitionLogo}
                title={'Fully Customizable'}
                description={"Improve brand awareness and content discoverability through customizable links. Supercharging audience engagement."}
            />
            <Line />
        </Box>
    );
}

export default CardsContainer;