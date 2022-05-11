import { AnimationContainer, BackgroundImage, Content } from "./style";
import { FiMail, FiLock } from "react-icons/fi";

import { Link, useHistory, Redirect } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Main from "../../components/Main";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";

import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/user/login", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@Doit:token", JSON.stringify(token));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((_) => toast.error("E-mail ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Main>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              label="E-mail"
              placeholder="Seu melhor e-mail"
              icon={FiMail}
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              icon={FiLock}
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <Button type="submit">Enviar</Button>
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
