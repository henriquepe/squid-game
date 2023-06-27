import { Container, Title } from "./styles";
import { ButtonProps } from "./types";

export function Button({ onClick, title }: ButtonProps) {
  return (
    <Container data-testid="buttonContainer" onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  );
}
