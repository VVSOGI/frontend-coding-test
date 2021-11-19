import styled from "styled-components";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import { ClickedType, FilterOnOff } from "../../types/Types";

export const FilterSelectZone = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FilterSelectLeft = styled.div`
  display: flex;
  font-size: 12px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
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

export const ConsultingText = styled.span`
  color: #323d45;
`;
