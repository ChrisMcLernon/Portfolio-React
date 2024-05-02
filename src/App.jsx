import styled, { ThemeProvider } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import { useRef } from "react"

const theme = {
  color1: "#FFFFFF",
  color2: "#F8F32B",
  color3: "#8D99AE",
  color4: "#2B2D42",
  color5: "#000000",
  transparent: "#FFFFFB50",
};

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background-color: ${props => props.theme.color3};
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Hero/>
        <Who />
        <Works />
        <Contact />
      </Container>
    </ThemeProvider>
  )
}

export default App
