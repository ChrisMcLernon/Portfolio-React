import React, { forwardRef } from "react";
import styled from "styled-components";
import { media } from "../utils/breakpoints";



const Section = styled.section`
  height: 100vh;
  font-size: 18px;
  scroll-snap-align: center;
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
  width: 90%;
  padding: 25px;
  border-radius: 10px;
  z-index: 1;
`

const Title = styled.h1`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  font-size: 44px;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};

  ${media.hsm`
    font-size: 30px;
  `}
  ${media.wmd`
    font-size: 30px;
  `}
`
const Sub = styled.h2`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  font-size: 20px;
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
  font-size: 24px;
  padding-bottom: 15px;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};

  ${media.hsm`
    font-size: 12px;
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
      <Section>
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
                  <A>MEAN Stack</A>
                </ListItem>
                <ListItem>
                  <A>React/HTML/CSS</A>
                </ListItem>
                <ListItem>
                  <A>Micro-Controllers (Raspberry Pi, Ti)</A>
                </ListItem>
                <ListItem>
                  <A>Server / Pc managment</A>
                </ListItem>
              </Column_L>
              <Column_R>
              <ListItem>
                  <A>C/C++</A>
                </ListItem>
                <ListItem>
                  <A>C#</A>
                </ListItem>
                <ListItem>
                  <A>Javascript</A>
                </ListItem>
                <ListItem>
                  <A>Python</A>
                </ListItem>
              </Column_R>
            </List>
          </Group>
        </Container>
      </Section>
    )
}


export default forwardRef(Who)