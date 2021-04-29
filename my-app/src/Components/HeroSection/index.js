import React from 'react';
import { Button } from 'react-scroll';
import Video from '../../videos/video.mp4';
import {HeroContainer, Herobg, Videobg} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <Herobg>
                <Videobg autoPlay loop muted src={Video} type='video/mp4' />
            </Herobg>
            {/* <HeroContent>
                <HeroH1>Good Morning......</HeroH1>
                <HeroP>Hello Everyone, Welcome to the Page</HeroP>
                <HerobtnWrapper>
                    <Button to="signup">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HerobtnWrapper>
            </HeroContent> */}
        </HeroContainer>
    )
}

export default HeroSection
