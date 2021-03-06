import styled from "styled-components";
import { FiTrash2, FiEdit, FiHeart } from "react-icons/fi";

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

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeButton = styled(FiHeart)`
  font-size: 28px;
  color: #000;
  transition: 0.2s;

  :hover {
    color: red;
    cursor: pointer;
  }
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

export const Post = styled.div`
  margin: 44px 36px;
  border: 1px solid #999;

  header {
    max-width: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 28px;

    h1 {
      max-width: 70%;
      word-wrap: break-word;
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
    word-wrap: break-word;
  }

  p + div {
    padding: 0px 28px 28px 28px;
    gap: 8px;
    justify-content: flex-end;
  }
`;
