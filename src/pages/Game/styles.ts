import styled from "@emotion/styled";
import colors from "@global/colors";

export const Container = styled.div`
  background-color: ${colors.gray[900]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Logo = styled.img`
  margin-bottom: 42px;
`;

export const GameWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`;

export const GameMainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px 24px;
  flex: 1;
`;

export const GameMainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StartGameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  img {
    width: 159px;
    height: 136px;
  }
`;

export const StartGameItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
