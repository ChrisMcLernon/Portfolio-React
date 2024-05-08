import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from '../utils/breakpoints'

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: ${props => props.active ? props.theme.color2 : props.theme.color4};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  white-space: nowrap;
  position: relative;

  ${media.hlg`
    font-size: 60px;
  `}
  ${media.wmd`
    font-size: 30px;
  `}
  ${media.wxs`
    font-size: 20px;
  `}
`

const PortfolioTitle = ({item, onMouseEnter, active}) => {

    const handleMouseEnter = () =>{
        onMouseEnter(item);
    };

  return (
    <ListItem text={item} onMouseEnter={handleMouseEnter} active={active}>
        {item}
    </ListItem>
  )
}

export default PortfolioTitle
