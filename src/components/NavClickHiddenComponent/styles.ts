import styled from "styled-components";
import BusinessIcon from "@material-ui/icons/Business";
import { hiddenComponentOutPropsCSSType } from "../../types/Types";

export const HiddenTotalContainer = styled.div<hiddenComponentOutPropsCSSType>`
  display: none;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    display: block;
  }
`;

export const HiddenBackground = styled.div<hiddenComponentOutPropsCSSType>`
  background-color: ${(props) => {
    return props.hiddenComponentOut === "1" ? "#00000088" : "transparent";
  }};
  width: 101%;
  height: 100%;
  transition: 0.5s;
`;

export const HiddenContainer = styled.div<hiddenComponentOutPropsCSSType>`
  transform: ${(props) => {
    return props.hiddenComponentOut === "1"
      ? "translateX(0%)"
      : "translateX(-100%)";
  }};
  position: absolute;
  width: 77.8%;
  height: 100%;
  background-color: #fff;
  transition: 0.5s;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;

export const HiddenHeader = styled.div`
  padding: 12px 20px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 24px;
`;

export const HiddenHeaderTitle = styled.span`
  display: flex;
  align-items: center;
  color: #2196f3;
  font-size: 14px;
  span {
    font-weight: 900;
    font-size: 16px;
    margin-right: 3px;
  }
`;

export const HiddenContent = styled.span`
  margin: 12px 32px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

export const HiddenPartnerProcessIcon = styled(BusinessIcon)`
  margin-right: 8px;
`;
