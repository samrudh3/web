import React from 'react';
import { Button } from 'react-scroll';
import Video from '../../videos/video.mp4';
import {HeroContainer, Herobg, Videobg, HeroContent, HeroH1, HeroP} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <Herobg>
                <Videobg autoPlay loop muted src={Video} type='video/mp4' />
            </Herobg>
            <HeroContent>
                <HeroH1>Good Morning......</HeroH1>
                <HeroP>Hello Everyone, Welcome to the Page</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
