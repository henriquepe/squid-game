import { Container, Info, Label } from "./styles";
import { InfoCardProps } from "./types";

export function InfoCard({ info, label, width }: InfoCardProps) {
  return (
    <Container width={width}>
      <Label>{label}</Label>
      <Info>{info}</Info>
    </Container>
  );
}
