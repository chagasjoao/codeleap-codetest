/* eslint-disable prettier/prettier */
import React from "react";
import styled, { css } from "styled-components";
import { shade } from "polished";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const CustomButton = styled.button<ButtonProps>`
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

  ${props => props.disabled && css`
    background-color: #777;
    cursor: not-allowed;
  `}
`;

export default function Button({ children, ...props }: ButtonProps) {
  return <CustomButton {...props}>{children}</CustomButton>;
}
