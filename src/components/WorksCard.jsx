import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/breakpoints'
import ConditionalLink from './ConditionalLink'

const Card = styled.div`
  max-width: 80%;
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
  height: 100%;
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
  padding: 0px 10px;

  ${media.wmd`
    font-size: 0;
  `}
  
`
const CardList = styled.ul`
  display: flex;
  align-items:center;
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
  flex-direction: row;
  gap: 20px;
`

const A = styled.a`
  font-size: 24px;
  padding: 0px 50px 10px 0px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};

  &:hover{
    color: ${props => props.theme.color2};
  };
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
