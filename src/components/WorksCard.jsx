import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/breakpoints'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.transparent};
  border-radius: 30px;
  margin: auto;
  box-shadow: 9px 8px 12.5px 2.5px ${props => props.theme.color5};
`
const Img = styled.img`
  height: 50%;
  width: 90%;
  border-radius: 30px;

  ${media.hlg`
    padding: 20px;
  `}
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
  padding: 0px 40px;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
`
const CardList = styled.ul`
  display: flex;
  align-items:center;
  gap: 20px;
  list-style: none;
  color: ${props => props.theme.color1};
`
const CardListItem = styled.li`
  background-color: ${props => props.theme.color4};
  padding: 4px;
  border-radius: 5px;
`
const A = styled.a`
  font-size: 24px;
  padding: 0px 0px 20px 0px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color1};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};

  &:hover{
    color: ${props => props.theme.color2};
  };
`

const WorksCard = ({project : {title, imgsrc, desc, skills, source}}) => {
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
        <A href={source} target='blank'>Source</A>
    </Card>
  )
}

export default WorksCard
