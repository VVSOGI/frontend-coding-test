import React from "react";
import { RequestCardPropsType } from "../../types/Types";
import {
  RequestMainCard,
  RequestCardTitleBox,
  RequestCardTitle,
  RequestCardConsulting,
  RequestCardClient,
  RequestCardDelieveryDate,
  RequestCardLine,
  RequestCardBottomContent,
  RequestCardBaseBox,
  RequestCardBase,
  RequestCardBaseHave,
  RequestCardButtonBox,
  RequestCardButton,
} from "./styles";

const RequestCard: React.FC<RequestCardPropsType> = ({ props }) => {
  return (
    <RequestMainCard>
      <RequestCardTitleBox>
        <RequestCardTitle>{props.title}</RequestCardTitle>
        <RequestCardConsulting haveConsulting={props.status}>
          상담중
        </RequestCardConsulting>
      </RequestCardTitleBox>
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
