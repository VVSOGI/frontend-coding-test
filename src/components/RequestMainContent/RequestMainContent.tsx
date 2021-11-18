import React from "react";
import styled from "styled-components";
import { RequestApiType, RequestMainCardType } from "../../types/Types";
import RequestCard from "../RequestCard/RequestCard";

const RequestMainContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 0 155px;
  position: relative;
  padding-bottom: 3rem;
`;

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
