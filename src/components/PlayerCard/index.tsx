import {
  Container,
  PlayerAvatar,
  PlayerAward,
  PlayerInfo,
  PlayerName,
} from "./styles";
import { PlayerCardProps } from "./types";

export function PlayerCard({ avatar, award, name }: PlayerCardProps) {
  return (
    <Container data-testid="playerCard">
      <PlayerInfo>
        <PlayerAvatar data-testid="playerAvatar" src={avatar} />
        <PlayerName>{name}</PlayerName>
      </PlayerInfo>
      <PlayerAward>R$ {award}</PlayerAward>
    </Container>
  );
}
