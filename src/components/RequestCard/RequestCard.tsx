import React from "react";
import styled from "styled-components";
import { ChatType, RequestCardPropsType } from "../../types/Types";

const RequestMainCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  color: #323d45;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

const RequestCardTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const RequestCardClient = styled.span`
  margin-bottom: 24px;
`;

const RequestCardDelieveryDate = styled.span`
  font-size: 14px;
  color: #939fa5;
  margin-bottom: 16px;
`;

const RequestCardLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-bottom: 32px;
`;

const RequestCardBottomContent = styled.div`
  margin-bottom: 28px;
`;

const RequestCardBaseBox = styled.div`
  display: flex;
`;

const RequestCardBase = styled.div`
  min-width: 70px;
  margin-right: 32px;
  margin-bottom: 8px;
  font-size: 14px;
`;

const RequestCardBaseHave = styled.div`
  font-size: 14px;
  font-weight: 800;
`;

const RequestCardButtonBox = styled.div`
  display: flex;
`;

const RequestCardButton = styled.div<ChatType>`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const RequestCard: React.FC<RequestCardPropsType> = ({ props }) => {
  return (
    <RequestMainCard>
      <RequestCardTitle>{props.title}</RequestCardTitle>
      <RequestCardClient>{props.client}</RequestCardClient>
      <RequestCardDelieveryDate>{props.due} 까지 납기</RequestCardDelieveryDate>
      <RequestCardLine />
      <RequestCardBottomContent>
        <RequestCardBaseBox>
          <RequestCardBase>도면개수</RequestCardBase>
          <RequestCardBaseHave>
            {props.count ? props.count : props.docs}개
          </RequestCardBaseHave>
        </RequestCardBaseBox>
        <RequestCardBaseBox>
          <RequestCardBase>총 수량</RequestCardBase>
          <RequestCardBaseHave>{props.amount}개</RequestCardBaseHave>
        </RequestCardBaseBox>
        <RequestCardBaseBox>
          <RequestCardBase>가공방식</RequestCardBase>
          <RequestCardBaseHave>{props.method.join(",")}</RequestCardBaseHave>
        </RequestCardBaseBox>
        <RequestCardBaseBox>
          <RequestCardBase>재료</RequestCardBase>
          <RequestCardBaseHave>{props.material.join(",")}</RequestCardBaseHave>
        </RequestCardBaseBox>
      </RequestCardBottomContent>
      <RequestCardButtonBox>
        <RequestCardButton chatType={false}>요청 내역 보기</RequestCardButton>
        <RequestCardButton chatType={true}>채팅하기</RequestCardButton>
      </RequestCardButtonBox>
    </RequestMainCard>
  );
};

export default RequestCard;
