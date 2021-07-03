import React from 'react';
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import HomeSecondSection from "../../components/HomeSecondSection/HomeSecondSection";
import HomeBoost from "../../components/HomeBoostSection/HomeBoost";

const Home = () => {
    return (
        <>
            <HomeIntro />
            <div style={{margin: '80px 0'}}></div>
            <HomeSecondSection />
            <HomeBoost />
        </>
    );
};

export default Home;