import { PlayerList } from "@components/PlayerList";
import {
  Container,
  GameMainInfo,
  GameMainInfoWrapper,
  GameWrapper,
  Logo,
  StartGameItemsWrapper,
  StartGameWrapper,
} from "./styles";
import SmallLogoIcon from "@assets/squidgame-small-logo.png";
import CircleSoldier from "@assets/soldier-circle.png";
import { InfoCard } from "@components/InfoCard";
import { Button } from "@components/Button";
import { useGame } from "./hooks/use-game";

export function GamePage() {
  const {
    gameOver,
    players,
    prizePoolFormatted,
    backToHome,
    startRound,
    resetGame,
    round,
    roundActive,
    votesToEnd,
    votingActive,
  } = useGame();

  const renderGameAction = () => {
    if (roundActive) {
      return <InfoCard info="" label="Eliminando participantes" width="100%" />;
    } else if (votingActive) {
      return <InfoCard info="" label="Votação acontecendo" width="100%" />;
    } else if (gameOver) {
      return <Button onClick={resetGame} title="Reiniciar jogo" />;
    } else {
      return <Button onClick={startRound} title="Iniciar rodada" />;
    }
  };

  return (
    <Container>
      <Logo data-testid="gameLogo" src={SmallLogoIcon} />
      <Button onClick={backToHome} title="Voltar para a Home" />
      <GameWrapper>
        <PlayerList showEliminated={false} players={players} />
        <GameMainInfoWrapper>
          <GameMainInfo>
            <InfoCard info={round.toString()} label="Round" width="81px" />
            <InfoCard
              info={prizePoolFormatted}
              label="Fundos do Prêmio"
              width="307px"
            />
          </GameMainInfo>
          <StartGameWrapper>
            <StartGameItemsWrapper>
              <img src={CircleSoldier} alt="Soldier" />
              {renderGameAction()}
            </StartGameItemsWrapper>
          </StartGameWrapper>
          <InfoCard
            info={votesToEnd.toString()}
            label="Votos para o fim do jogo"
            width="100%"
          />
        </GameMainInfoWrapper>
        <PlayerList showEliminated={true} players={players} />
      </GameWrapper>
    </Container>
  );
}
