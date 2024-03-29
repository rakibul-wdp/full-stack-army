import { styled } from "styled-components";
import InputGroup from "../components/shared/forms/InputGroup";

const fontSizes = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.2rem",
};

const BaseButton = styled.button`
  border: none;
  border-radius: 0.15rem;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
`;

const PrimaryButton = styled(BaseButton)`
  background: red;
  color: wite;
`;

const Example2 = () => {
  return (
    <div>
      <h1>Styled Component</h1>
      <InputGroup />
    </div>
  );
};

export default Example2;
