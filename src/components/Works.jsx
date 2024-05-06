import React, { useState} from "react";
import styled from "styled-components";
import { media } from "../utils/breakpoints";
import projects from "../data/Portfolio.json";
import WorksCard from "./WorksCard";
import PortfolioTitle from "./PortfolioTitle";

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
  ${media.wmd`
    padding-left: unset;
    margin: unset;
    gap: unset;

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
  ${media.wmd`
    
  `}
`
const List = styled.ul`
  list-style: none;
  display:flex;
  flex-direction: column;
  gap: 50px;
  ${media.wmd`
    gap: 15px;
    padding-top: 35px;
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

  ${media.wmd`
    flex: 4;
    padding-left: unset;
    margin: unset;
    gap: unset;

  `}
`
const Works = () => {
  const [state, setState] = useState("Web Development");
  const [activeItem, setActiveItem] = useState("Web Development");

  const handleMouseEnter = (item) => {
    setState(item);
    setActiveItem(item);
  }

  const result = projects.filter((project) => project.filter === state);

  return (
      <Section id="portfolio">
        <Container>
          <Group_1>
            <List>
              {data.map((item, id) => (
                <PortfolioTitle key={id} item={item} onMouseEnter={handleMouseEnter} active={activeItem === item}/>
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