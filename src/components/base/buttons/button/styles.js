import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  color: red;
  font-weight: bold;
  /* ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `} */

  box-shadow: none;
  border: none;
  margin: 20px;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
