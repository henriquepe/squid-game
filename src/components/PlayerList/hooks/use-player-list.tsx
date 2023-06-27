import { useEffect, useState } from "react";
import { UsePlayerListProps } from "./types";

export function usePlayerList({ players, showEliminated }: UsePlayerListProps) {
  const [playersSummary, setPlayersSummary] = useState({
    filtered: 0,
    total: 0,
    players: [],
  });

  const handlePlayersSummary = () => {
    if (showEliminated) {
      const elimitaded = players.filter((player) => player.eliminated).length;
      return setPlayersSummary({
        filtered: elimitaded,
        total: players.length,
        players: players.filter((player) => player.eliminated),
      });
    }
    const notEliminated = players.filter((player) => !player.eliminated).length;
    return setPlayersSummary({
      filtered: notEliminated,
      total: players.length,
      players: players.filter((player) => !player.eliminated),
    });
  };

  useEffect(() => {
    if (players) handlePlayersSummary();
  }, [players]);

  return {
    playersSummary,
  };
}
