import { useNavigate } from "react-router-dom";

export function useHome() {
  const navigate = useNavigate();

  const handleNavigateToGamePage = () => {
    navigate("/game");
  };

  return {
    handleNavigateToGamePage,
  };
}
