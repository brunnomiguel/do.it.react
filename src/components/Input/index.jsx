import { Container, InputContainer } from "./style";

const Input = ({ label, icon: Icon, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        {Icon && <Icon />}
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
