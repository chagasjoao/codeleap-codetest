import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 500px;
  background: #fff;
  padding: 28px;
`;

export const Title = styled.h1`
  font-size: 22px;
`;

export const Form = styled.form`
  margin-top: 32px;

  label {
    font-size: 16px;
  }

  input {
    margin-top: 16px;
    margin-bottom: 20px;
    width: 100%;
    height: 28px;
    font-size: 14px;
    padding: 8px 12px;

    border: 1px solid #777;
    border-radius: 4px;
  }
`;
