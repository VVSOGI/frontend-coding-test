/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { RequestApiType, DivideClickItemType } from "../../types/Types";
import RequestMainContent from "../../components/RequestMainContent/RequestMainContent";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import {
  RequestContainer,
  RequestTopContent,
  ComingRequest,
  ComingRequestDetail,
} from "./styles";
import NavClickHiddenComponent from "../../components/NavClickHiddenComponent/NavClickHiddenComponent";

const RequestPage: React.FC = () => {
  const [isProcessClicked, setIsProcessClicked] = useState(false);
  const [isIngredientClicked, setIsIngredientClicked] = useState(false);
  const [clickedItem, setClickedItem] = useState<string[]>([]);
  const [divideClickItem, setDivideClickItem] = useState<DivideClickItemType>({
    processMethod: [],
    ingredient: [],
  });
  const [requestItem, setRequestItem] = useState<RequestApiType[]>([]);
  const [filteredItem, setFilteredItem] = useState<RequestApiType[]>([]);
  const [isConsulting, setIsConsulting] = useState<boolean>(false);
  const [hiddenComponentOut, setHiddenComponentOut] = useState<boolean>(false);

  const handleProcessClick = () => {
    setIsProcessClicked(!isProcessClicked);
  };

  const handleIngredientClick = () => {
    setIsIngredientClicked(!isIngredientClicked);
  };

  const handleClickItem = (selectItem: string, itemType: string) => {
    let isClicked =
      clickedItem.filter((item) => item === selectItem).length > 0;
    if (isClicked) {
      const filterSlice = clickedItem // 클릭을 두 번 했을 경우에 해당 아이템 스테이트에서 제거.
        .slice()
        .filter((item) => item !== selectItem);
      handleDivideFilter(selectItem, itemType);
      setClickedItem(filterSlice);
    } else {
      const clickedSlice = clickedItem.slice(); // 클릭을 했을 때 스테이트로 상태 관리.
      clickedSlice.push(selectItem);
      handleDivideItemPush(selectItem, itemType);
      setClickedItem(clickedSlice);
    }
  };

  const handleRemoveIdAll = () => {
    setClickedItem([]);
    setIsProcessClicked(false);
    setIsIngredientClicked(false);
    handleConsulting(false);
    setDivideClickItem({ processMethod: [], ingredient: [] });
  };

  const handleDivideItemPush = (selectItem: string, itemType: string) => {
    if (itemType === "processMethod") {
      let divideItemSlice = { ...divideClickItem };
      divideItemSlice.processMethod.push(selectItem);
      setDivideClickItem(divideItemSlice);
    } else {
      let divideItemSlice = { ...divideClickItem };
      divideItemSlice.ingredient.push(selectItem);
      setDivideClickItem(divideItemSlice);
    }
  };

  const handleDivideFilter = (selectItem: string, itemType: string) => {
    if (itemType === "processMethod") {
      let divideItemSlice = { ...divideClickItem };
      divideItemSlice.processMethod = divideItemSlice.processMethod.filter(
        (item) => item !== selectItem
      );
      setDivideClickItem(divideItemSlice);
    } else {
      let divideItemSlice = { ...divideClickItem };
      divideItemSlice.ingredient = divideItemSlice.ingredient.filter(
        (item) => item !== selectItem
      );
      setDivideClickItem(divideItemSlice);
    }
  };

  const handleChangeFilter = () => {
    const firstFilterItem = requestItem.filter((item) => {
      let count = 0;
      for (let i = 0; i < item.method.length; i++) {
        if (divideClickItem.processMethod.indexOf(item.method[i]) !== -1) {
          count++;
        }
      }
      return count >= divideClickItem.processMethod.length ? true : false;
    });
    const secondFilterItem = firstFilterItem.filter((item) => {
      let count = 0;
      for (let i = 0; i < item.material.length; i++) {
        if (divideClickItem.ingredient.indexOf(item.material[i]) !== -1) {
          count++;
        }
      }
      return count >= divideClickItem.ingredient.length ? true : false;
    });

    setFilteredItem(secondFilterItem);
  };

  const handleConsulting = (isSwitchOn: boolean) => {
    if (!isSwitchOn) {
      setIsConsulting(false);
    } else {
      setIsConsulting(!isConsulting);
    }
  };

  const handleConsultingChangeCard = () => {
    if (isConsulting) {
      let checkDuringConsulting = filteredItem.filter(
        (item) => item.status === "상담중"
      );
      setFilteredItem(checkDuringConsulting);
    } else {
      handleChangeFilter();
    }
  };

  const handleHiddenComponent = () => {
    setHiddenComponentOut(!hiddenComponentOut);
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

  useEffect(() => {
    handleChangeFilter();
  }, [clickedItem, requestItem]);

  useEffect(handleConsultingChangeCard, [isConsulting]);

  return (
    <RequestContainer>
      <Navigation
        handleHiddenComponent={handleHiddenComponent}
        hiddenComponentOut={hiddenComponentOut}
      />
      <RequestTopContent>
        <ComingRequest>들어온 요청</ComingRequest>
        <ComingRequestDetail>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </ComingRequestDetail>
        <FilterSelect
          handleProcessClick={handleProcessClick}
          handleClickItem={handleClickItem}
          handleIngredientClick={handleIngredientClick}
          handleRemoveIdAll={handleRemoveIdAll}
          isProcessClicked={isProcessClicked}
          isIngredientClicked={isIngredientClicked}
          clickedItem={clickedItem} //redux
          handleConsulting={handleConsulting}
          isConsulting={isConsulting}
        />
      </RequestTopContent>
      <RequestMainContent requestItem={filteredItem} />
      <NavClickHiddenComponent
        handleHiddenComponent={handleHiddenComponent}
        hiddenComponentOut={hiddenComponentOut}
      />
    </RequestContainer>
  );
};

export default RequestPage;
