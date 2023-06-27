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
  margin-bottom: 64px;
`;
