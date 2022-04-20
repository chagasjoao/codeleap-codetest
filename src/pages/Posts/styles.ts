import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  padding-bottom: 5px;
  margin: 0 auto;
  background: #fff;
`;

export const Header = styled.h1`
  width: 100%;
  background: #000;

  font-size: 22px;
  color: #fff;

  padding: 28px 36px;
`;

export const InsertForm = styled.form`
  margin: 44px 36px;
  border: 1px solid #999;
  padding: 24px 32px;

  h1 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  span {
    display: block;
    font-size: 16px;
    color: #777;
  }

  label {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 8px;
    margin-top: 32px;
  }

  input + label {
    margin-top: 0;
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

  textarea {
    width: 100%;
    min-height: 80px;
    resize: vertical;
    font-size: 14px;
    margin-bottom: 36px;
    padding: 8px 12px;

    border: 1px solid #777;
    border-radius: 4px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  min-height: 50vh;
  align-items: center;
  justify-content: center;
`;
