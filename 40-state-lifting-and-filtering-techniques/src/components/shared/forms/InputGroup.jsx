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

const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
`;

const InputGroup = ({
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <Container>
      <Text>Label</Text>
      <TextInput />
    </Container>
  );
};

export default InputGroup;
