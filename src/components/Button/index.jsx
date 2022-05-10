import { StyledButton } from "./style";

const Button = ({ children, whiteSchema = false, ...rest }) => {
  return (
    <StyledButton whiteSchema={whiteSchema} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
