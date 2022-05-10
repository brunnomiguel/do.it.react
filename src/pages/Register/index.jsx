import { AnimationContainer, BackgroundImage, Content } from "./style";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";

import Main from "../../components/Main";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Register = () => {
  return (
    <Main>
      <BackgroundImage />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input label="Nome" placeholder="Seu nome" icon={FiUser} />
            <Input label="E-mail" placeholder="Seu melhor e-mail" icon={FiMail}/>
            <Input
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              icon={FiLock}
            />
            <Input
              label="Confirmação de senha"
              placeholder="Confirme sua senha"
              type="password"
              icon={FiLock}
            />
            <Button>Enviar</Button>
            <p>
              Já possui uma conta? Faça seu <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Main>
  );
};
export default Register;
