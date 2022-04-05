import React from "react";
import { Wrapper, Container, Title, Form } from "./styles";

function SignUp() {
  return (
    <Wrapper>
      <Container>
        <Title>Welcome to CodeLeap network!</Title>

        <Form action="">
          <p>Please enter your username</p>

          <input placeholder="John Doe" type="text" />
          <button type="submit">ENTER</button>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default SignUp;
