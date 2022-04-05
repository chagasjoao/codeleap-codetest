import styled from "styled-components";
import { shade } from "polished";

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

  p {
    font-size: 16px;
    margin-bottom: 16px;
  }

  input {
    width: 100%;
    height: 28px;
    font-size: 14px;
    margin-bottom: 20px;
    padding: 8px 12px;

    border: 1px solid #777;
    border-radius: 4px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    padding: 8px 32px;

    background: #000;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#777")};
    }
  }
`;
