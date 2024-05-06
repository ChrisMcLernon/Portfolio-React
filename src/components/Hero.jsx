import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { media } from "../utils/breakpoints";

const Section = styled.div`
  height: 100dvh;
  width: 100dvw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`

const Container = styled.div`
  height: 90%;
  width: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-left: 10%;
  margin-right: 10%;

  ${media.wlg`
    flex-direction: column-reverse;
  `}
`
const Left = styled.div`
  flex: 2;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  z-index: 1;

  ${media.wlg`
    bottom: 10%;
  `}
  ${media.wmd`
    bottom: 5%;
  `}

  ${media.wmd`
    gap: unset;
    margin: auto;
  `}
`
const Title = styled.h1` 
  font-size: 80px;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  position: relative;
  ${media.wmd`
    margin : auto;
    font-size: 32px;
    padding-top: 150px;
  `}
`
const WhatWeDo = styled.div` 
  display: flex;
  align-items: center;
  gap: 10px;
  ${media.wmd`
    gap: unset;
  `}
`
const Sub = styled.h2`
  padding-left: 50px;
  font-size: 30px;
  color: ${props => props.theme.color2};
  position: relative;
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  ${media.wmd`
    margin : auto;
    font-size: 22px;
    padding-left: unset;
  `}
`
const Desc = styled.p`
  font-size: 24px;
  color: ${props => props.theme.color1};
  overflow: hidden;
  border-right: .15em solid ${props => props.theme.color2};
  white-space: nowrap;
  letter-spacing: .15em;
  position: relative;
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  animation: typing 3s steps(39, end), blink-caret .75s step-end infinite;

  ${media.wmd`
  font-size: 12px;
    margin: auto;
    gap: unset;
  `}
  

@keyframes typing {
  from { 
    width: 0;
  } to { 
    width: 100%;
    &:after{
    }
  }
};

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: ${props => props.theme.color2};}
};
`
const Right = styled.div`
  flex: 3;
  position: relative;
  margin: auto;
  left: 10%;
  gap: 10px;
  z-index: 1;

  ${media.wlg`
    top: 20%;
    left: 0;
  `}
  ${media.hsm`
    top: 5%;
  `}
  ${media.wmd`
    left: 0;
  `}

`
const Anim = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 500px;
  height: 500px;
  display: grid;
  border: 20px solid #0000;
  border-radius: 50%;
  border-right-color: ${props => props.theme.color4};
  animation: spinner-a4dj62 5.4s infinite linear;


  ${media.hlg`
    width: 300px;
    height: 300px;
  `}
  ${media.hmd`
    width: 200px;
    height: 200px;
  `}
  ${media.wmd`
    top: 20%;
  `}

&:before,
&:after {
   content: "";
   grid-area: 1/1;
   margin: 10px;
   border: inherit;
   border-radius: 50%;
   border-right-color: ${props => props.theme.color1};
   animation: spinner-a4dj62 7.8s infinite;
};

&:after {
   margin: 40px;
   border-right-color: ${props => props.theme.color2};
   animation-duration: 8.199999999999999s;
};

@keyframes spinner-a4dj62 {
   100% {
      transform: rotate(1turn);
   }
};
`

const Hero = () => {
    return (
        <Section>
          <Navbar />
          <Container>
              <Left>
                <Title>Chris McLernon</Title>
                <WhatWeDo>
                  <Sub>Software Developer</Sub>
                </WhatWeDo>
                <Desc>Passionate about Web Development and AI.</Desc>
              </Left>
              <Right>
                <Anim/>
              </Right>
          </Container>
        </Section>
    )
}

export default Hero