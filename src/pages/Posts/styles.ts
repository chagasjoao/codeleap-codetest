import styled from "styled-components";
import { FiTrash2, FiEdit } from "react-icons/fi";

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteIcon = styled(FiTrash2)`
  font-size: 28px;
  color: #fff;
  transition: 0.2s;
  :hover {
    color: #c53030;
    cursor: pointer;
  }
`;

export const EditIcon = styled(FiEdit)`
  font-size: 28px;
  color: #fff;
  transition: 0.2s;
  margin-left: 32px;
  :hover {
    color: #87ceeb;
    cursor: pointer;
  }
`;

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

export const EditForm = styled.form`
  width: 50vw;

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
  }

  div {
    display: flex;
    justify-content: space-between;

    span {
      margin-top: 24px;
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

export const LoadingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;
