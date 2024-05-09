import styled, { ThemeProvider } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Works from "./components/Works"
import Navbar from "./components/Navbar";

const theme = {
  color1: "#FFFFFF",
  color2: "#F8F32B",
  color3: "#8D99AE",
  color4: "#2B2D42",
  color5: "#000000",
  transparent: "#FFFFFB50",
};

const Container = styled.div`
  width: auto;
  margin-inline: auto;
  scroll-behavior: smooth;
  overflow-y: hidden;
  overflow-x: hidden;
  scrollbar-width: none;
  background-color: ${props => props.theme.color3};
  background-repeat: repeat;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Hero/>
        <Works />
        <Contact />
      </Container>
    </ThemeProvider>
  )
}

export default App
