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
  min-height: 100dvh;
  min-width: 100dvw;
  padding: 2dvb;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  z-index: 1;
  margin: auto;
`

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;

  ${media.wlg`
      flex-direction: column;
  `}
`
const Blur_1 = styled.div`
  position: absolute;
  width: 50dvw;
  height: 50dvh;
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
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 1;
  margin: auto;
`
const List = styled.ul`
  list-style: none;
  display:flex;
  flex-direction: column;
  gap: 30px;
`
const Group_2 = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns:
    repeat(autofit, minmax(250px, 1fr));
  z-index: 1;
  margin: auto;
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