import styled from "@emotion/styled";
import colors from "@global/colors";
import font from "@global/font";

export const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  height: 24px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary.base};
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary.dark};
  }
`;

export const Title = styled.p`
  color: ${colors.white};
  font-family: ${font.smallBold.fontFamily};
  font-weight: ${font.smallBold.fontWeight};
  line-height: ${font.smallBold.lineHeight};
  font-size: ${font.smallBold.size};
`;
