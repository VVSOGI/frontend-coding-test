import styled from "styled-components";
import checkIcon from "@material-ui/icons/Check";
import { ClickProps } from "../../types/Types";

export const SquareCheckBoxContainer = styled.div`
  margin: 8px 12px;
  display: flex;
  cursor: pointer;
`;

export const SquareCheckBoxThing = styled.div<ClickProps>`
  position: relative;
  width: 10px;
  height: 10px;
  border: ${(props) => {
    return props.isClicked ? "2px solid #2196f3" : "2px solid #939fa5";
  }};
  border-radius: 2px;
  margin-right: 6px;
  background-color: ${(props) => {
    return props.isClicked ? "#2196f3" : "transparent";
  }};
`;

export const SquareCheckIcon = styled(checkIcon)`
  width: 150% !important;
  height: 150% !important;
  // material-ui의 기본 설정을 생략해야할 경우이기에 !important를 사용했습니다.

  position: absolute;
  color: #ffffff;
  left: -25%;
  top: -25%;
  @media only screen and (max-width: 480px) {
    top: -30%;
    width: 148% !important;
  }
`;

export const CheckBoxText = styled.div``;
