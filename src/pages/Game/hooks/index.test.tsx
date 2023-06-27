import { renderHook, act } from "@testing-library/react-hooks";
import { useGame } from "./use-game";
import { BrowserRouter as Router } from "react-router-dom";

describe("useGame", () => {
  test("initializes correctly", () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: Router,
    });

    expect(result.current.players).toHaveLength(69);
    expect(result.current.round).toBe(0);
    expect(result.current.prizePool).toBe(0);
    expect(result.current.votesToEnd).toBe(0);
    expect(result.current.roundActive).toBe(false);
    expect(result.current.votingActive).toBe(false);
    expect(result.current.gameOver).toBe(false);
    expect(result.current.prizePoolFormatted).toBe("0.00");
  });

  test("startRound starts a round correctly", () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: Router,
    });

    act(() => {
      result.current.startRound();
    });

    expect(result.current.round).toBe(1);
    expect(result.current.roundActive).toBe(true);
  });

  test("eliminatePlayers eliminates players correctly", () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: Router,
    });

    act(() => {
      result.current.eliminatePlayers();
    });

    const eliminatedPlayers = result.current.players.filter(
      (player) => player.eliminated
    );

    expect(eliminatedPlayers.length).toBeGreaterThan(0);
    expect(result.current.roundActive).toBe(false);
    expect(result.current.votingActive).toBe(true);
  });

  test("startVoting starts voting correctly", () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: Router,
    });

    act(() => {
      result.current.startVoting();
    });

    expect(result.current.votesToEnd).toBeGreaterThanOrEqual(0);
    expect(result.current.votingActive).toBe(false);
  });

  test("endGame ends the game correctly", () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: Router,
    });

    act(() => {
      result.current.endGame();
    });

    expect(result.current.players.every((player) => player.eliminated)).toBe(
      false
    );
    expect(result.current.votingActive).toBe(false);
    expect(result.current.gameOver).toBe(true);
  });

  test("resetGame resets the game correctly", () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: Router,
    });

    act(() => {
      result.current.resetGame();
    });

    expect(result.current.players).toHaveLength(69);
    expect(result.current.round).toBe(0);
    expect(result.current.prizePool).toBe(0);
    expect(result.current.votesToEnd).toBe(0);
    expect(result.current.roundActive).toBe(false);
    expect(result.current.votingActive).toBe(false);
    expect(result.current.gameOver).toBe(false);
    expect(result.current.prizePoolFormatted).toBe("0.00");
  });
});
