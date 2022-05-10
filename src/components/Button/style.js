import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;

  background-color: ${(props) => (props.whiteSchema ? "#F5F5F5" : "#0C0D0D")};
  color: ${(props) => (props.whiteSchema ? "#0C0D0D" : "#F5F5F5")};

  margin-top: 16px;
  height: 45px;

  border-radius: 8px;
  border: 2px solid var(--black);

  font-family: "Roboto Mono", monospace;

  transition: 0.5s;

  &:hover {
    border: 2px solid var(--orange);
  }
`;
