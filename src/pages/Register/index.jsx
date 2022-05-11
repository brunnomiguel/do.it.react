import { AnimationContainer, BackgroundImage, Content } from "./style";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Link, useHistory, Redirect } from "react-router-dom";

import Main from "../../components/Main";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import api from "../../services/api";
import { toast } from "react-toastify";

const Register = ({ authenticated }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post("/user/register", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((_) =>
        toast.error("Erro ao criar a conta, e-mail já cadastrado")
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Main>
      <BackgroundImage />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              label="Nome"
              placeholder="Seu nome"
              icon={FiUser}
              register={register}
              name="name"
              error={errors.name?.message}
            />
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
            <Input
              label="Confirmação de senha"
              placeholder="Confirme sua senha"
              type="password"
              icon={FiLock}
              register={register}
              name="confirmPassword"
              error={errors.confirmPassword?.message}
            />
            <Button type="submit">Enviar</Button>
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
