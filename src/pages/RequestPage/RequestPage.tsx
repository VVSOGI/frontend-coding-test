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
  // 가공 방식 버튼 클릭

  const handleIngredientClick = () => {
    setIsIngredientClicked(!isIngredientClicked);
  };
  // 재료 버튼 클릭

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
  // SquareCheckBox의 아이템들을 클릭할 경우에 상태 관리.
  // 자식 컴포넌트가 가지고 있으면 리 렌더링 되면서 초기화 될 수 있기에 부모 컴포넌트에서 관리 후
  // 버튼을 껏다 켜도 유지가 될 수 있다.

  const handleRemoveIdAll = () => {
    setClickedItem([]);
    setIsProcessClicked(false);
    setIsIngredientClicked(false);
    handleConsulting(false);
    setDivideClickItem({ processMethod: [], ingredient: [] });
  };
  // 필터링 리셋 버튼 클릭 시에 초기화 함수.

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
  // RequestCard 필터링을 위해 itemType을 기준으로 나눠서 state 변수 divideClickItem에 상태 저장

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
  // SquareCheckBox의 아이템이 선택된 후 또 선택하면 저장된 state 변수 divideClickItem에
  // 해당 아이템을 제거.

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
  // 필터링을 구현하기 위한 메인 기능. 가공방식을 우선적으로 필터한 후에 재료를 필터하는 방식으로 구현.
  // 반대의 순서로 해도 문제는 없다. 최초로 서버에서 불러온 데이터가 오염되지 않게끔 했기 때문에 가능!

  const handleConsulting = (isSwitchOn: boolean) => {
    if (!isSwitchOn) {
      setIsConsulting(false);
    } else {
      setIsConsulting(!isConsulting);
    }
  };
  // 상담 중인 요청만 보기 버튼 클릭시 이벤트 발생 함수.

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
  // 상담 중인 요청만 볼 수 있게끔 구현, 만약에 가지고 있는 카드중에
  // 없다면 조건에 맞는 견적이 없다는 화면이 나온다.

  const handleHiddenComponent = (switching: boolean) => {
    if (switching) {
      setHiddenComponentOut(true);
    } else {
      setHiddenComponentOut(false);
    }
  };
  // 화면이 480 픽셀 이하로 떨어졌을 때 메뉴 버튼 이벤트 클릭 함수.

  const handleServerData = async () => {
    const response = await fetch("http://localhost:3001/requests");
    if (response.status === 200) {
      const data = response.json();
      return data;
    } else {
      throw new Error("For some reason you can't get server data.");
    }
  };
  // 서버에서 데이터를 호출하기 위한 함수.

  useEffect(() => {
    handleServerData().then((item) => {
      setRequestItem(item);
    });
  }, []);
  // 호출된 데이터를 최초 렌더링할 때, 스테이트로 저장한다.

  useEffect(() => {
    handleChangeFilter();
  }, [clickedItem, requestItem]);
  // clickedItem ,requestItem가 변경되면 handleChangeFilter() 실행.

  useEffect(handleConsultingChangeCard, [isConsulting]);
  // isConsulting이 변경되면 handleChangeFilter() 실행.

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
