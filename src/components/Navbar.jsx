import React, {useRef} from 'react'
import styled from 'styled-components'
import { HiOutlineDesktopComputer  } from "react-icons/hi";
import { media } from '../utils/breakpoints';


const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 5;

  ${media.wxs`
    position: absolute;
  `}
`

const Cotainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 12.5px 2.5px ${props => props.theme.color4};
  background-color: ${props => props.theme.color4};
  border-radius: 5px;
`
const Links = styled.div`
  margin:auto;
  display: flex;
  align-items:center;
`
const Logo = styled.div`
  padding: 4px 20px 0px 0px;
  color: ${props => props.theme.color1};
`
const List = styled.ul`
  display: flex;
  align-items:center;
  gap: 20px;
  list-style: none;
  color: ${props => props.theme.color1};
`
const ListItem = styled.li`

`
const A = styled.a`
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color1};

  &:hover{
    color: ${props => props.theme.color2};
  };

`




const Navbar = () => {


  
  return (
    <Section>
      <Cotainer>
        <Links>
          <Logo>
            <A href="/"><HiOutlineDesktopComputer /></A>
          </Logo>
            <List>
                <ListItem>
                  <A href="#about">About</A>
                </ListItem>
                <ListItem>
                  <A href="#portfolio">Portfolio</A>
                </ListItem>
                <ListItem>
                  <A href="#contact">Contact</A>
                </ListItem>
            </List>
        </Links>
      </Cotainer>
    </Section>
  )
}

export default Navbar

