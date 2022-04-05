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

export const Form = styled.form`
  margin: 44px 36px;
  border: 1px solid #999;
  padding: 24px 32px;

  h1 {
    font-size: 22px;
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;
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
    margin-bottom: 20px;
    padding: 8px 12px;

    border: 1px solid #777;
    border-radius: 4px;
  }
`;

export const Post = styled.div`
  margin: 44px 36px;
  border: 1px solid #999;

  header {
    width: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 28px;

    h1 {
      flex: 1;
      font-size: 22px;
      color: #fff;
    }

    svg + svg {
      margin-left: 32px;
    }

    svg {
      color: #fff;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;

    span {
      padding: 0 28px;
      font-size: 18px;
      color: #777;
    }
  }

  p {
    padding: 0px 28px 28px 28px;
    font-size: 18px;
    margin-top: 20px;
  }
`;
