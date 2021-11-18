import styled from "styled-components";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import { ClickedType, FilterOnOff } from "../../types/Types";

export const FilterSelectZone = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: space-between;
`;

export const FilterSelectLeft = styled.div`
  display: flex;
  font-size: 12px;
`;

export const ProcessingMethodButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProcessingMethodBasic = styled.div<ClickedType>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 4px 12px;
  border: 1px solid black;
  border-radius: 4px;
  border-color: #939fa5;
  background-color: ${(props) => {
    return props.$clickProcessBtn === "1" ? "#1565C0" : "transparent";
  }};
  color: ${(props) => {
    return props.$clickProcessBtn === "1" ? "#fff" : "#323d45";
  }};
  &:hover {
    border-color: #2196f3;
    cursor: pointer;
  }
`;

export const ProcessingMethodClicked = styled.div`
  position: absolute;
  width: 90%;
  top: 110%;
  left: 0;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 2px 2px;
  background-color: #fff;
  z-index: 10;
`;

export const ProcessingMethodText = styled.span`
  margin-right: 4px;
`;

export const IngredientButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const IngredientBasic = styled.div<ClickedType>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  padding: 4px 12px;
  border: 1px solid black;
  border-radius: 4px;
  border-color: #939fa5;
  background-color: ${(props) => {
    return props.$clickIngredientBtn === "1" ? "#1565C0" : "transparent";
  }};
  color: ${(props) => {
    return props.$clickIngredientBtn === "1" ? "#fff" : "#323d45";
  }};
  &:hover {
    border-color: #2196f3;
    cursor: pointer;
  }
`;

export const IngredientClicked = styled.div`
  position: absolute;
  width: 100px;
  top: 110%;
  left: 0;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 2px 2px;
  background-color: #fff;
  z-index: 10;
`;

export const IngredientText = styled.span`
  margin-right: 4px;
`;

export const FilterButtonIcon = styled(ArrowDropDown)<ClickedType>`
  width: 10px;
  color: ${(props) => {
    return props.$clickProcessBtn === "1" || props.$clickIngredientBtn === "1"
      ? "#fff"
      : "#939fa5";
  }};
`;

export const FilterSelectRight = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterReset = styled.div<FilterOnOff>`
  display: ${(props) => {
    return props.isFilterOn ? "flex" : "none";
  }};
  align-items: center;
  color: #2196f3;
  cursor: pointer;
`;

export const ResetIcon = styled(RefreshIcon)`
  width: 16px;
  margin-right: 6px;
`;

export const ResetText = styled.span`
  font-size: 12px;
`;

export const ConsultingSwitch = styled.div`
  min-width: 34px;
  height: 14px;
  position: relative;
  margin-right: 16px;
`;

export const ConsultingSwitchBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c2c2c2;
  border-radius: 20px;
`;

export const ConsultingSwitchCircle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -25%;
  left: -5%;
  // 움직일 경우 left: 50%;
  z-index: 10;
  border-radius: 50%;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24); ;
`;

export const ConsultingText = styled.span`
  color: #323d45;
`;
