import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import { RequestApiType } from "../../types/Types";
import RequestMainContent from "../../components/RequestMainContent/RequestMainContent";
import FilterSelect from "../../components/FilterSelect/FilterSelect";

const RequestContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RequestTopContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 155px;
  margin-bottom: 32px;
`;

const ComingRequest = styled.span`
  font-size: 20px;
  font-weight: 600;
  height: 32px;
  display: flex;
  align-items: center;
`;

const ComingRequestDetail = styled.span`
  font-size: 16px;
  color: #323d45;
`;

const RequestPage: React.FC = () => {
  const [isProcessClicked, setIsProcessClicked] = useState(false);
  const [isIngredientClicked, setIsIngredientClicked] = useState(false);
  const [clickedId, setClickedId] = useState<number[]>([]);
  const [requestItem, setRequestItem] = useState<RequestApiType[]>([]);

  const handleProcessClick = () => {
    setIsProcessClicked(!isProcessClicked);
  };

  const handleIngredientClick = () => {
    setIsIngredientClicked(!isIngredientClicked);
  };

  const handleClickId = (id: number) => {
    let isClicked = clickedId.filter((item) => item === id).length > 0;
    if (isClicked) {
      const filterSlice = clickedId.slice().filter((item) => item !== id);
      setClickedId(filterSlice);
    } else {
      const clickedSlice = clickedId.slice();
      clickedSlice.push(id);
      setClickedId(clickedSlice);
    }
  };

  const handleRemoveIdAll = () => {
    setClickedId([]);
    setIsProcessClicked(false);
    setIsIngredientClicked(false);
  };

  const handleServerData = async () => {
    const response = await fetch("http://localhost:3001/requests");
    if (response.status === 200) {
      const data = response.json();
      return data;
    } else {
      throw new Error("For some reason you can't get server data.");
    }
  };

  useEffect(() => {
    handleServerData().then((item) => {
      setRequestItem(item);
    });
  }, []);

  return (
    <RequestContainer>
      <Navigation />
      <RequestTopContent>
        <ComingRequest>들어온 요청</ComingRequest>
        <ComingRequestDetail>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </ComingRequestDetail>
        <FilterSelect
          handleProcessClick={handleProcessClick}
          handleClickId={handleClickId}
          handleIngredientClick={handleIngredientClick}
          handleRemoveIdAll={handleRemoveIdAll}
          isProcessClicked={isProcessClicked}
          isIngredientClicked={isIngredientClicked}
          clickedId={clickedId}
        />
      </RequestTopContent>
      <RequestMainContent requestItem={requestItem} />
    </RequestContainer>
  );
};

export default RequestPage;
