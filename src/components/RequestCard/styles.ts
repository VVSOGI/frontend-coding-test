import styled from "styled-components";
import { ChatType, isConsultingType } from "../../types/Types";

export const RequestMainCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  color: #323d45;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

export const RequestCardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const RequestCardTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const RequestCardConsulting = styled.div<isConsultingType>`
  display: ${(props) => {
    return props.haveConsulting === "상담중" ? "block" : "none";
  }};
  font-size: 12px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
  padding: 2px 8px;
`;

export const RequestCardClient = styled.span`
  margin-bottom: 24px;
  font-size: 14px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const RequestCardDelieveryDate = styled.span`
  font-size: 14px;
  color: #939fa5;
  margin-bottom: 16px;
`;

export const RequestCardLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-bottom: 32px;
`;

export const RequestCardBottomContent = styled.div`
  margin-bottom: 28px;
`;

export const RequestCardBaseBox = styled.div`
  display: flex;
`;

export const RequestCardBase = styled.div`
  min-width: 70px;
  margin-right: 32px;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const RequestCardBaseHave = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const RequestCardButtonBox = styled.div`
  display: flex;
`;

export const RequestCardButton = styled.div<ChatType>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-right: 8px;
  padding: 6px 12px;
  border: ${(props) => {
    return props.chatType ? "1px solid #2196f3" : null;
  }};
  background-color: ${(props) => {
    return props.chatType ? "#fff" : "#2196f3";
  }};
  border-radius: 4px;
  color: ${(props) => {
    return props.chatType ? "#2196f3" : "#fff";
  }};
  cursor: pointer;

  @media only screen and (max-width: 720px) {
    padding: 4px 12px;
    font-size: 12px;
  }
  @media only screen and (max-width: 720px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;
