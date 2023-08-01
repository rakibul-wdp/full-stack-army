import { styled } from "styled-components";

const TextInput = styled.input`
  width: 100%;
  border: 1px solid white;
  border-radius: 5px;
  outline: none;
  padding: 0.25rem 0.5rem;
  background: transparent;
  font-size: 0.9rem;
  font-family: Arial;

  &:focus {
    border: 2px solid skyblue;
  }
`;

export default TextInput;
