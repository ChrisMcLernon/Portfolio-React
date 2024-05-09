import React from 'react'
import styled from 'styled-components'
import ConditionalLink from './ConditionalLink'
import { media } from '../utils/breakpoints'

const Card = styled.div`
  min-height: 25dvh;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.transparent};
  border-radius: 30px;
  box-shadow: 9px 8px 12.5px 2.5px ${props => props.theme.color5};
`
const Container = styled.div`
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  aspect-ratio: 19/6;
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;

`
const Title = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  text-align: center;
`
const Desc = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  padding-inline: 2vb;
  
 ${media.hsm`
    font-size: 0;
 `} 
`
const CardList = styled.ul`
  display: flex;
  align-items:center;
  justify-content: center;
  margin: auto;
  gap: 10px;
  list-style: none;
  color: ${props => props.theme.color1};
`
const CardListItem = styled.li`
  background-color: ${props => props.theme.color4};
  padding: 5px;
  border-radius: 5px;
`
const LinkGroup = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  margin: auto;
  flex-direction: row;
  gap: 20px;
`

const WorksCard = ({project : {title, imgsrc, desc, skills, source, DemoLink}}) => {
  return (
    <Card>
      <Container>
        <Img src={imgsrc} alt={`Image of ${title}`}></Img>
      </Container>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <CardList>
          {skills.length > 0 ? (
            skills.map((skill, id) => (
              <CardListItem key={id}>{skill}</CardListItem>
            ))
          ) : (
            <></>
          )}
        </CardList>
        <LinkGroup>
          <ConditionalLink href={source} target='blank'>Source</ConditionalLink>
          <ConditionalLink href={DemoLink} target='blank'>Demo</ConditionalLink>
        </LinkGroup>
    </Card>
  )
}

export default WorksCard
