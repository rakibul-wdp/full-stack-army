import { styled } from "styled-components";

const BaseButton = styled.button`
  border: none;
  outline: none;
  background: white;
  color: black;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
`;

const Example2 = () => {
  return (
    <div>
      <h1>Styled Component</h1>
      <BaseButton>Button</BaseButton>
    </div>
  );
};

export default Example2;
