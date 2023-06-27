import styled from "@emotion/styled";
import { colors, font } from "@global/index";
import { InfoCardContainerProps } from "./types";

export const Container = styled.div<InfoCardContainerProps>`
  width: ${({ width }) => width || "100%"};
  background-color: ${colors.gray[700]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4px 0px;
  border-radius: 8px;
`;

export const Label = styled.p`
  color: ${colors.gray[100]};
  font-size: ${font.smallRegular.size};
  font-weight: ${font.smallRegular.fontWeight};
  line-height: ${font.smallRegular.lineHeight};
  font-family: ${font.smallRegular.fontFamily};
  margin: 0px;
`;

export const Info = styled.p`
  color: ${colors.gray[100]};
  font-size: ${font.bigBold.size};
  font-weight: ${font.bigBold.fontWeight};
  font-family: ${font.bigBold.fontFamily};
  line-height: ${font.bigBold.lineHeight};
  margin: 0px;
`;
