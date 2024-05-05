import React, { useState} from "react";
import styled from "styled-components";
import { media } from "../utils/breakpoints";
import projects from "../data/Portfolio.json";
import WorksCard from "./WorksCard";

const data = [
  "Web Development",
  "Artificial Intelligence",
  "3D Rendering",
  "Cybersecurity",
  "System Architecture"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  z-index: 1;
`

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  ${media.wlg`
      flex-direction: column;
  `}
`
const Blur_1 = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  min-width: 350px;
  min-height: 350px;
  top: -128px;
  left: 10vw;
  border: 764px;
  background: ${props => props.theme.transparent};
  filter: blur(100px);
  z-index: 0;
  pointer-events: none;
`
const Blur_2 = styled.div`
  position: absolute;
  width: 20dvh;
  height: 20dvh;
  min-width: 350px;
  min-height: 350px;
  top: 328px;
  left: 50vw;
  border: 764px;
  background: ${props => props.theme.transparent};
  filter: blur(100px);
  z-index: 0;
  pointer-events: none;
`

const Group_1 = styled.div`
  flex: 2;
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 1;

  ${media.hlg`
    flex: 3;
    justify-content: flex-start;
    text-align: left;
  `}
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
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  white-space: nowrap;
  position: relative;

  &:after{
    content: "${props => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 0px;
    color: ${props => props.theme.color2};
    -webkit-text-stroke: 1px ${props => props.theme.color4};
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
const Group_2 = styled.div`
  flex: 2;
  display: flex;
  gap: 20px;
  align-items: center;
  z-index: 1;
  flex-direction: row;
  margin: auto;
  padding-left: 20px;
`



const Works = () => {
  const [state, setState] = useState("");

  const itemNoSpaces = state.replace(/ /g, '');

  

  const result = projects.filter((project) => project.filter === state);

  return (
      <Section id="portfolio">
        <Container>
          <Group_1>
            <List>
              {data.map((item) => (
                <ListItem key={item} className={itemNoSpaces} text={item} onMouseEnter={() => setState(item)}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Group_1>
          <Group_2>
          {result.length > 0 ? (
            result.map((project, id) => (
              <WorksCard key={id} project={project} />
            ))
          ) : (
            <></>
          )}
          </Group_2>
          <Blur_1 />
          <Blur_2 />
        </Container>
      </Section>
  )
}

export default Works