import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';



const Section = styled.div`
  height: 100vh;
  min-width: 100%;
  scroll-snap-align: center;
  z-index: 1;
`
const Container = styled.div`
  padding-top: 10dvh;
`
const Group_1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`
const Title = styled.h1`
  font-weight: 200;
  color: ${props => props.theme.color4};
  text-shadow: ${props => props.theme.color1} 1px 1px;
  margin: auto;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 25px;
  background: ${props => props.theme.transparent};
  box-shadow: 9px 8px 12.5px 2.5px ${props => props.theme.color4};
`
const Input = styled.input`
  color: ${props => props.theme.color4};
  padding: 20px;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.transparent};
  max-width: 60dvw;
  min-width: 60dvw;
`
const TextArea = styled.textarea`
  color: ${props => props.theme.color4};
  margin: auto;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.transparent};
  max-width: 60dvw;
  min-width: 60dvw;
  max-height: 40dvh;
  min-height: 40dvh;
`
const Button = styled.button`
  color: ${props => props.theme.color5};
  margin: auto;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.transparent};
  box-shadow: 9px 8px 12.5px 2.5px ${props => props.theme.color4};

  &:hover{
    box-shadow: 7px 7px 12.5px 2.5px ${props => props.theme.color4};;
    transform: translate(2px, 1px);
  };

  &:active{
    box-shadow: 6px 6px 12.5px 2.5px ${props => props.theme.color4};;
    transform: translate(3px, 2px);
  };
`


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_v3dvvoi', 'template_xc3ebwg', ref.current, 'HrRND57ChkybuiFIG')
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        }, (error) => {
          console.log(error.text);
          setSuccess(false);
        });

};

    return (
        <Section id="contact">
          <Container>
            <Group_1>
              <Form ref={ref} onSubmit={handleSubmit}>
                <Title>Contact Me</Title>
                <Input placeholder="Name" name="name"></Input>
                <Input placeholder="Email" name="email"></Input>
                <TextArea placeholder="Write Message" name="message"></TextArea>
                <Button type="submit">Send</Button>
              </Form>
            </Group_1>
          </Container>
        </Section>
    )
}

export default Contact