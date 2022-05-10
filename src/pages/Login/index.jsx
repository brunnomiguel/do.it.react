import { AnimationContainer, BackgroundImage, Content } from "./style";
import { FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";

import Main from "../../components/Main";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
  return (
    <Main>
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input
              label="E-mail"
              placeholder="Seu melhor e-mail"
              icon={FiMail}
            />
            <Input
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              icon={FiLock}
            />
            <Button>Enviar</Button>
            <p>
              Não possui uma conta? <Link to="/register">Cadastre-se</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <BackgroundImage />
    </Main>
  );
};
export default Login;
