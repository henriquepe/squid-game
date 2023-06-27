import { useEffect, useState } from "react";
import md5 from "md5";
import { useNavigate } from "react-router-dom";

function getRandomName() {
  const firstNames = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Beatriz",
    "Paulo",
    "Fernanda",
    "Lucas",
    "Isabela",
  ];
  const lastNames = [
    "Silva",
    "Pereira",
    "Oliveira",
    "Santos",
    "Lima",
    "Soares",
    "Gomes",
    "Mendes",
    "Barbosa",
    "Pinto",
  ];

  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;
}

function getGravatarUrl(name) {
  const hash = md5(name.toLowerCase().trim());
  return `https://www.gravatar.com/avatar/${hash}.jpg?d=identicon`;
}

export function useGame() {
  const initialPlayers = Array.from({ length: 69 }, (_, index) => ({
    avatar: getGravatarUrl(getRandomName()),
    name: getRandomName(),
    award: "420,000.00",
    id: index + 1,
    eliminated: false,
  }));
  const navigate = useNavigate();
  const [players, setPlayers] = useState(initialPlayers);
  const [round, setRound] = useState(0);
  const [prizePool, setPrizePool] = useState(0);
  const [votesToEnd, setVotesToEnd] = useState(0);
  const [roundActive, setRoundActive] = useState(false);
  const [votingActive, setVotingActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (roundActive) {
      setTimeout(eliminatePlayers, 5000);
    }
    if (votingActive) {
      setTimeout(startVoting, 5000);
    }
  }, [roundActive, votingActive]);

  const startRound = () => {
    setRound((prevRound) => prevRound + 1);
    setRoundActive(true);
  };

  const eliminatePlayers = () => {
    let newPlayers = players.map((player) => {
      if (!player.eliminated && Math.random() < 0.42) {
        setPrizePool(
          (prevPrize) => prevPrize + parseFloat(player.award.replace(/,/g, ""))
        );
        return { ...player, eliminated: true };
      } else {
        return player;
      }
    });

    // Checar se todos os jogadores foram eliminados, caso sim, escolher um jogador aleatório para sobreviver
    if (newPlayers.filter((player) => !player.eliminated).length === 0) {
      const randomIndex = Math.floor(Math.random() * newPlayers.length);
      newPlayers[randomIndex].eliminated = false;
    }

    setPlayers(newPlayers);
    setRoundActive(false);
    setVotingActive(true);
  };

  const startVoting = () => {
    let newVotesToEnd = 0;
    players.forEach((player) => {
      if (!player.eliminated && Math.random() < 0.3) {
        newVotesToEnd += 1;
      }
    });
    setVotesToEnd(newVotesToEnd);
    if (newVotesToEnd / players.filter((p) => !p.eliminated).length > 0.5) {
      endGame();
    } else {
      setVotingActive(false);
    }
  };

  const endGame = () => {
    const alivePlayers = players.filter((p) => !p.eliminated).length;
    const prizePerPlayer = prizePool / alivePlayers;
    const formattedPrizePerPlayer = prizePerPlayer
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const newPlayers = players.map((player) =>
      player.eliminated ? player : { ...player, award: formattedPrizePerPlayer }
    );

    setPlayers(newPlayers);
    setVotingActive(false);
    setGameOver(true);
  };

  const resetGame = () => {
    setPlayers(initialPlayers);
    setRoundActive(false);
    setVotingActive(false);
    setPrizePool(0);
    setGameOver(false);
    setRound(0);
    setVotesToEnd(0);
  };

  const backToHome = () => {
    navigate("/");
  };

  const prizePoolFormatted = prizePool
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return {
    players,
    round,
    prizePool,
    votesToEnd,
    roundActive,
    votingActive,
    gameOver,
    startRound,
    eliminatePlayers,
    startVoting,
    endGame,
    resetGame,
    backToHome,
    prizePoolFormatted,
  };
}
