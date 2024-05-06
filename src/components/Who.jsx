import React, { forwardRef } from "react";
import styled from "styled-components";
import { media } from "../utils/breakpoints";



const Section = styled.section`
  height: 100dvh;
  width: 100dvw;
  font-size: 18px;
  scroll-snap-align: center;
  z-index: 1;
`

const Container = styled.div`
  display: grid;
  flex-direction: row;
  height: 100vh;
  scroll-snap-align: center;

  ${media.hmd`
    display: flex;
    flex-direction: column;
  `}
`
const Group = styled.div`
  margin: auto;
  align-content: center;
  background: ${props => props.theme.transparent};
  box-shadow: 9px 8px 12.5px 2.5px ${props => props.theme.color5};
  height: 55%;
  width: 90%;
  padding: 25px;
  border-radius: 10px;
  z-index: 1;

  ${media.hmd`
    height: unset;
  `}

  ${media.wmd`
    width: 80%;
    padding: 10px;
  `}
`

const Title = styled.h1`
  display: flex;
  gap: 10px;
  justify-content: center;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: ${props => props.theme.color4};

  ${media.hmd`
    font-size: 30px;
  `}
  ${media.wmd`
    font-size: 30px;
  `}
`
const Sub = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  color: ${props => props.theme.color2};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};

  ${media.hmd`
    font-size: 15px;
  `}
  ${media.wmd`
    font-size: 15px;
  `}
`
const Desc = styled.p`
  font-size: 27px;
  padding: 15px;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};

  ${media.hsm`
    font-size: 12px;
  `}
  ${media.wmd`
    font-size: 13px;
    padding: 2px;
    text-align: center;
  `}
`
const List = styled.ul`
  padding-top: 10px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  align-items:center;
  gap: 60px;
  list-style: none;
  color: ${props => props.theme.color1};

  ${media.wlg`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `}
  ${media.hmd`
    gap: 10px;
  `}
`
const ListItem = styled.li`
  padding-top: 10px;
`
const A = styled.a`
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};

  &:hover{
    color: ${props => props.theme.color2};
  };

  ${media.hsm`
    font-size: 12px;
  `}
  ${media.wmd`
    font-size: 15px;
  `}
`
const Column_L = styled.div`
  display: flex;
  margin:auto;
  flex-direction: column;

`
const Column_R = styled.div`
  display: flex;
  margin:auto;
  flex-direction: column;
`


const Who = () => {
    return (
      <Section id="about">
        <Container>
          <Group>
              <Title>Bio</Title>
              <Sub>Father of Two | Former Healthcare Professional</Sub>
              <Desc>
                As an aspiring Junior Software Engineer, I recently transitioned from a role in the healthcare sector to drive innovation
                in the technology industry. My previous position has honed my leadership, problem-solving, and collaboration skills,
                which I believe will facilitate my efforts to develop software solutions that cater to user needs, emphasizing continuous
                improvement and teamwork. My unique perspective on software development stems from my experience in healthcare,
                where I learned to prioritize user needs, which I believe will enable me to drive forward-looking software development
                projects. I am eager to leverage my skill set to contribute to the development of cutting-edge software solutions.
              </Desc>
          </Group>
          <Group>
            <Title>Software / Hardware Proficincies</Title>
            <Sub>(Select to see example)</Sub>
            <List>
              <Column_L>
                <ListItem>
                  <A href="https://github.com/ChrisMcLernon/Full-Stack-Full_Development/tree/Module7" target="blank">MEAN Stack</A>
                </ListItem>
                <ListItem>
                  <A href="https://github.com/ChrisMcLernon/Portfolio-React/tree/Portfolio" target="blank">React/HTML/CSS</A>
                </ListItem>
                <ListItem>
                  <A href="https://github.com/ChrisMcLernon/System-Architecture-and-Micro-Controllers" target="blank">Micro-Controllers (Raspberry Pi, Ti)</A>
                </ListItem>
                <ListItem>
                  <A href="https://github.com/ChrisMcLernon/CS-405" target="blank">Server / Pc managment</A>
                </ListItem>
              </Column_L>
              <Column_R>
              <ListItem>
                  <A href="https://github.com/ChrisMcLernon/CS-330-Project-1" target="blank">C/C++</A>
                </ListItem>
                <ListItem>
                  <A href="https://github.com/ChrisMcLernon/" target="blank">C#</A>
                </ListItem>
                <ListItem>
                  <A href="https://github.com/ChrisMcLernon/Portfolio-React/tree/Portfolio" target="blank">Javascript</A>
                </ListItem>
                <ListItem>
                  <A href="https://github.com/ChrisMcLernon/AI-and-Emerging-Trends/tree/main" target="blank">Python</A>
                </ListItem>
              </Column_R>
            </List>
          </Group>
        </Container>
      </Section>
    )
}


export default forwardRef(Who)