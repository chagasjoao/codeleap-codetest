import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { Wrapper, Container, Title, Form } from "./styles";
import Button from "../../components/Button";
import { changeUser } from "../../redux/userSlice";

const signUpValidation = Yup.object({
  userName: Yup.string().required(),
});

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Container>
        <Title>Welcome to CodeLeap network!</Title>

        <Formik
          initialValues={{ userName: "" }}
          validationSchema={signUpValidation}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(changeUser(values.userName));
            navigate("/posts");
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, values, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="userName">Please enter your username</label>
              <input
                id="userName"
                placeholder="John Doe"
                type="text"
                value={values.userName}
                onChange={handleChange}
              />

              <Button type="submit" disabled={!values.userName}>
                ENTER
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
}

export default SignUp;
