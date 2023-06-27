export interface Player {
  id: number;
  avatar: string;
  name: string;
  award: string;
  eliminated: boolean;
}

export interface PlayerListProps {
  players: Player[];
  showEliminated: boolean;
}
