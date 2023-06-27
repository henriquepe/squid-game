import styled from "@emotion/styled";
import { colors, font } from "@global/index";
import { PlayerAvatarProps } from "./types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${colors.gray[200]};
  border-bottom-width: 100%;
`;

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayerAvatar = styled.img<PlayerAvatarProps>`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 32px;
  margin-right: 8px;
  background: ${({ src }) => `url(${src}), lightgray 50% / cover no-repeat`};
`;

export const PlayerName = styled.p`
  color: ${colors.gray[100]};
  font-size: ${font.smallRegular.size};
  font-family: ${font.smallRegular.fontFamily};
  line-height: ${font.smallRegular.lineHeight};
`;

export const PlayerAward = styled.p`
  color: ${colors.gray[100]};
  font-size: ${font.smallBold.size};
  font-family: ${font.smallBold.fontFamily};
  line-height: ${font.smallBold.lineHeight};
  font-weight: ${font.smallBold.fontWeight};
`;
