import { Button } from "@components/Button";
import { Container, Logo } from "./styles";
import LogoIcon from "@assets/squidgame-logo.png";
import { useHome } from "./hooks/use-home";

export function HomePage() {
  const { handleNavigateToGamePage } = useHome();

  return (
    <Container>
      <Logo data-testid="gameLogo" src={LogoIcon} />
      <Button onClick={handleNavigateToGamePage} title="Iniciar" />
    </Container>
  );
}
