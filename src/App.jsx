import styled, { ThemeProvider } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Works from "./components/Works"

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
  min-width: 100%;
  margin-inline: auto;
  scroll-behavior: smooth;
  scroll-snap-align: center;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  background-color: ${props => props.theme.color3};
  background-size: 100% 100%;
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
        <Works />
        <Contact />
      </Container>
    </ThemeProvider>
  )
}

export default App
