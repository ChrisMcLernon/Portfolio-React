import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  font-size: 5dvw;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  color: ${props => props.active ? props.theme.color2 : props.theme.color4};
  text-shadow: 2px 2px 10px ${props => props.theme.color4};
  white-space: nowrap;
  position: relative;
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
