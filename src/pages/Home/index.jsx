import { useHistory, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import { Section, ContentButton } from "./style";

const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Section>
      <h1>
        do<span>.</span>it
      </h1>
      <h2>Organize-se de forma fácil e efetiva</h2>
      <ContentButton>
        <Button onClick={() => handleNavigation("/register")} whiteSchema>
          Cadastre-se
        </Button>
        <Button onClick={() => handleNavigation("/login")}>Login</Button>
      </ContentButton>
    </Section>
  );
};
export default Home;
