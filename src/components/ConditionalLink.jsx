import React from 'react'
import styled from 'styled-components';
import { media } from '../utils/breakpoints';

const A = styled.a`
  font-size: 24px;
  padding: 0px 0px 20px 0px;
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


function ConditionalLink({href, children}){
  
    if (!href) {
        return null;
    }
  
    return <A href={href} target='blank'>{children}</A>
}

export default ConditionalLink
