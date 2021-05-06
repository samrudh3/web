import React from 'react';
import {Button} from '../ButtonElement';
import {
    Column2, Imgwrap, Img, InfoContainer, Infowrapper, InfoRow,
    Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap
} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart,lightText,darkText,buttonLabel,img,alt,description,topLine,HeadLine}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <Infowrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{HeadLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home">{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap>
                                <Img src={img} alt={alt}/>
                            </Imgwrap>
                        </Column2>
                    </InfoRow>
                </Infowrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
