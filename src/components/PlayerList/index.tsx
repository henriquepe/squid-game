import { PlayerListProps } from "./types";
import {
  Container,
  Header,
  HeaderListQuantity,
  HeaderTitle,
  ListWrapper,
} from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { usePlayerList } from "./hooks/use-player-list";

export function PlayerList({ players, showEliminated }: PlayerListProps) {
  const { playersSummary } = usePlayerList({
    players,
    showEliminated,
  });

  if (!players) return null;

  return (
    <Container data-testid="playerList">
      <Header>
        <HeaderTitle>
          Participantes {showEliminated && "Eliminados"}
        </HeaderTitle>
        <HeaderListQuantity data-testid="headerListQuantity">{`${playersSummary.filtered}/${playersSummary.total}`}</HeaderListQuantity>
      </Header>
      <ListWrapper>
        {playersSummary.players.map((player) => (
          <PlayerCard
            avatar={player.avatar}
            award={player.award}
            name={player.name}
            key={player.id}
          />
        ))}
      </ListWrapper>
    </Container>
  );
}
