import React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'

 const StyledText = styled.span``
 interface TextProps{
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span",
  children: ReactNode,
 }
 export const Text = ({children, tag, ...props}: TextProps) => {
  return(
    <StyledText as={tag} {...props}>{children}</StyledText>
  )
 }
