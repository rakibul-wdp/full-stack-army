import { styled } from "styled-components";
import TextInput from "../../UI/inputs/TextInput";
import Text from "../../UI/texts/Text";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = () => {
  return (
    <Container>
      <Text>Label</Text>
      <TextInput />
    </Container>
  );
};

export default InputGroup;
