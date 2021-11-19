import React from "react";
import { RequestApiType, RequestMainCardType } from "../../types/Types";
import RequestCard from "../RequestCard/RequestCard";
import { RequestMainContentBox, RequestMainContentIsNull } from "./styles";

const RequestMainContent: React.FC<RequestMainCardType> = ({ requestItem }) => {
  return (
    <RequestMainContentBox>
      {requestItem.length > 0 ? (
        requestItem.map((item: RequestApiType) => {
          return <RequestCard key={item.id} props={item} />;
        })
      ) : (
        <RequestMainContentIsNull>
          조건에 맞는 견적 요청이 없습니다.
        </RequestMainContentIsNull>
      )}
    </RequestMainContentBox>
  );
};

export default RequestMainContent;
