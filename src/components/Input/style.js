import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background-color: var(--white);
  color: var(--gray);

  border-radius: 10px;
  border: 2px solid var(--gray);

  padding: 1rem;
  width: 100%;

  display: flex;
  align-items: center;

  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background-color: transparent;
    color: var(--black);

    align-items: center;
    flex: 1;

    &::placeholder {
      color: var(--gray);
    }
  }
  svg {
    margin-right: 16px;
  }
`;
