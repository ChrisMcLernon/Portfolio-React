import React from "react";
import styled from "styled-components";
import { media } from "../utils/breakpoints";

const data = [
  "Web Development",
  "Artificial Intelligence",
  "3D Rendering",
  "Cybersecurity"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const Blur = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vw;
  min-width: 350px;
  min-height: 350px;
  top: -128px;
  left: 10vw;
  border: 764px;
  background: ${props => props.theme.transparent};
  filter: blur(100px);
  z-index: 0;
`

const Group_1 = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  z-index: 1;
`
const List = styled.ul`
  list-style: none;
  display:flex;
  flex-direction: column;
  gap: 50px;
`

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: ${props => props.theme.color4};
  -webkit-text-stroke: 1px ${props => props.theme.color1};
  white-space: nowrap;
  position: relative;

  &:after{
    content: "${props => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 0px;
    color: ${props => props.theme.color1};
  } 

  &:hover{
    &:after{
      animation: moveText 0.35s linear both;

      @keyframes moveText {
        to{
            width: 100%;
        }
      }
    }
  }

  ${media.hmd`
    font-size: 60px;
  `}
  ${media.wmd`
    font-size: 60px;
  `}
  ${media.hsm`
    font-size: 40px;
  `}
  ${media.wsm`
    font-size: 40px;
  `}
`

const Works = () => {

    return (
        <Section>
          <Container>
            <Group_1>
              <List>
                {data.map((item) => (
                  <ListItem key={item} text={item}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Group_1>
            <Group_1>
              {/*Card*/}
            </Group_1>
            <Blur />
          </Container>
        </Section>
    )
}

export default Works