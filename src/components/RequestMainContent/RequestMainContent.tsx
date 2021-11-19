import React from "react";
import { RequestApiType, RequestMainCardType } from "../../types/Types";
import RequestCard from "../RequestCard/RequestCard";
import { RequestMainContentBox } from "./styles";

const RequestMainContent: React.FC<RequestMainCardType> = ({ requestItem }) => {
  return (
    <RequestMainContentBox>
      {requestItem.length > 0
        ? requestItem.map((item: RequestApiType) => {
            return <RequestCard key={item.id} props={item} />;
          })
        : null}
    </RequestMainContentBox>
  );
};

export default RequestMainContent;
