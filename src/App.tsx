import "./App.css";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/Home";
import { GamePage } from "@pages/Game";

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
