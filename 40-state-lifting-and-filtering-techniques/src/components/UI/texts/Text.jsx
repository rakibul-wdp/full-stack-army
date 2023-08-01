import { styled } from "styled-components";

const fontSizes = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.1rem",
};

const lineHeight = {
  sm: "1.3rem",
  md: "1.4rem",
  lg: "1.6rem",
};

const Text = styled.p`
  font-family: Arial;
  font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
  color: white;
  line-height: ${(props) => lineHeight[props.line] ?? "1.3rem"};
`;

export default Text;
