import { styled } from "styled-components";

const BaseButton = styled.button`
  border: none;
  border-radius: 0.15rem;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Example2 = () => {
  return (
    <div>
      <h1>Styled Component</h1>
      <BaseButton dark>Button</BaseButton>
    </div>
  );
};

export default Example2;
