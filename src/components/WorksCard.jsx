import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/breakpoints'
import ConditionalLink from './ConditionalLink'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.transparent};
  border-radius: 30px;
  box-shadow: 9px 8px 12.5px 2.5px ${props => props.theme.color5};
`
const Img = styled.img`
  height: 50%;
  width: 90%;
  border-radius: 30px;

  ${media.hlg`
    padding: 20px;
  `}
  ${media.wmd`
    width: 0;
  `}
`
const Title = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  text-align: center;
  padding: 0px 20px 10px 10px;
  ${media.wmd`
    padding: 0px 10px;
  `}
`
const Desc = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 0px 40px;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};

  ${media.wmd`
    padding: 20px;

  `}
  
`
const CardList = styled.ul`
  display: flex;
  align-items:center;
  gap: 10px;
  list-style: none;
  color: ${props => props.theme.color1};

  ${media.wmd`
    gap: 3px;
  `}
`
const CardListItem = styled.li`
  background-color: ${props => props.theme.color4};
  padding: 5px;
  border-radius: 5px;

  ${media.wmd`
    font-size: 11px;
    padding: 5px;
  `}
`
const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const A = styled.a`
  font-size: 24px;
  padding: 0px 50px 10px 0px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  ${media.wmd`
    font-size: 18px;
    padding: 0px 0px 50px 0px;
  `}

  &:hover{
    color: ${props => props.theme.color2};
  };
`

const WorksCard = ({project : {title, imgsrc, desc, skills, source, Demo, DemoLink}}) => {
  return (
    <Card>
        <Img src={imgsrc} alt={`Image of ${title}`}></Img>
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
          <A href={source} target='blank'>Source</A>
          <ConditionalLink href={DemoLink} target='blank'>Demo</ConditionalLink>
        </LinkGroup>
    </Card>
  )
}

export default WorksCard
