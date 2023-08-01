import { styled } from "styled-components";
import Button from "../components/UI/buttons/Button";
import TextInput from "../components/UI/inputs/TextInput";
import Text from "../components/UI/texts/Text";

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
      <BaseButton dark size="lg">
        Button
      </BaseButton>
      <PrimaryButton size="lg">Primary Button</PrimaryButton>
      <TextInput />
      <Button>Click</Button>
      <Text size="lg" line="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        pariatur maiores in, consequuntur ipsam sed? Ad nemo amet, unde, beatae
        animi nesciunt consequuntur ducimus incidunt minus, culpa illo tempore
        doloremque.
      </Text>
    </div>
  );
};

export default Example2;
