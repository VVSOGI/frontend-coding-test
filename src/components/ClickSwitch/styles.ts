import styled from "styled-components";
import { SwitchOnOffType } from "../../types/Types";

export const ConsultingSwitch = styled.div`
  min-width: 34px;
  height: 14px;
  position: relative;
  margin-right: 16px;
  cursor: pointer;
`;

export const ConsultingSwitchBack = styled.div<SwitchOnOffType>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => {
    return props.switchOnOff ? "#BBDEFB" : "#c2c2c2";
  }};
  border-radius: 20px;
`;

export const ConsultingSwitchCircle = styled.div<SwitchOnOffType>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -25%;
  left: ${(props) => {
    return props.switchOnOff ? "50%" : "-5%";
  }};
  transition: 0.35s;
  z-index: 10;
  border-radius: 50%;
  background-color: ${(props) => {
    return props.switchOnOff ? "#2196F3" : "#f5f5f5";
  }};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  @media only screen and (max-width: 480px) {
    z-index: 9;
  }
`;
