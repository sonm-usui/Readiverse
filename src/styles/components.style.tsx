import { Box, theme } from "native-base";
import styled from "styled-components";

interface UIContainerProps {
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingX?: string | number;
    backgroundColor?: string;
}

export const UIContainer = styled(Box)`
  flex: 1;
  background-color: ${(props: UIContainerProps) =>
          props.backgroundColor || theme.colors.white};
  padding-top: ${(props: UIContainerProps) => props.paddingTop || '20px'};
  padding-bottom: ${(props: UIContainerProps) => props.paddingBottom || '20px'};
  padding-horizontal: ${(props: UIContainerProps) => props.paddingX || '20px'};
`;