import styled from "@emotion/styled";
import colors from "@global/colors";
import font from "@global/font";

export const Container = styled.div`
  padding: 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  width: 100%;
  background-color: ${colors.gray[700]};
  border-radius: 8px;
  height: 433px;
  max-width: 316px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.p`
  font-size: ${font.smallBold.size};
  font-family: ${font.smallBold.fontFamily};
  font-weight: ${font.smallBold.fontWeight};
  line-height: ${font.smallBold.lineHeight};
  color: ${colors.gray[100]};
`;

export const HeaderListQuantity = styled.p`
  font-size: ${font.intermediateBold.size};
  font-family: ${font.intermediateBold.fontFamily};
  font-weight: ${font.intermediateBold.fontWeight};
  line-height: ${font.intermediateBold.lineHeight};
  color: ${colors.gray[200]};
`;

export const ListWrapper = styled.div`
  overflow-y: scroll;
  height: 90%;
`;
