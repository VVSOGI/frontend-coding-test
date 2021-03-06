import React from "react";
import { FilterSelectZoneType } from "../../types/Types";
import SquareCheckBox from "../../components/SquareCheckBox/SquareCheckBox";
import { processingMethod, ingredient } from "../../data/filterDummy";
import {
  FilterSelectZone,
  FilterSelectLeft,
  ProcessingMethodButton,
  ProcessingMethodBasic,
  ProcessingMethodClicked,
  ProcessingMethodText,
  IngredientButton,
  IngredientBasic,
  IngredientClicked,
  IngredientText,
  FilterButtonIcon,
  FilterSelectRight,
  FilterReset,
  ResetIcon,
  ResetText,
  ConsultingText,
} from "./styles";
import ClickSwitch from "../ClickSwitch/ClickSwitch";

const FilterSelect: React.FC<FilterSelectZoneType> = ({
  handleProcessClick,
  isProcessClicked,
  clickedItem,
  handleClickItem,
  isIngredientClicked,
  handleIngredientClick,
  handleRemoveIdAll,
  handleConsulting,
  isConsulting,
}) => {
  return (
    <FilterSelectZone>
      <FilterSelectLeft>
        <ProcessingMethodButton>
          <ProcessingMethodBasic
            onClick={handleProcessClick}
            $clickProcessBtn={isProcessClicked ? "1" : "0"}
          >
            <ProcessingMethodText>가공방식</ProcessingMethodText>
            <FilterButtonIcon $clickProcessBtn={isProcessClicked ? "1" : "0"} />
          </ProcessingMethodBasic>
          {isProcessClicked ? (
            <ProcessingMethodClicked>
              {processingMethod.map((item) => {
                return (
                  <SquareCheckBox
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    isClicked={clickedItem}
                    handleClickItem={handleClickItem}
                  />
                );
              })}
            </ProcessingMethodClicked>
          ) : null}
        </ProcessingMethodButton>
        <IngredientButton>
          <IngredientBasic
            $clickIngredientBtn={isIngredientClicked ? "1" : "0"}
            onClick={handleIngredientClick}
          >
            <IngredientText>재료</IngredientText>
            <FilterButtonIcon
              $clickIngredientBtn={isIngredientClicked ? "1" : "0"}
            />
          </IngredientBasic>
          {isIngredientClicked ? (
            <IngredientClicked>
              {ingredient.map((item) => {
                return (
                  <SquareCheckBox
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    isClicked={clickedItem}
                    handleClickItem={handleClickItem}
                  />
                );
              })}
            </IngredientClicked>
          ) : null}
        </IngredientButton>
        <FilterReset
          onClick={handleRemoveIdAll}
          isFilterOn={clickedItem.length > 0 || isConsulting}
        >
          <ResetIcon />
          <ResetText>필터링 리셋</ResetText>
        </FilterReset>
      </FilterSelectLeft>
      <FilterSelectRight>
        <ClickSwitch
          handleConsulting={handleConsulting}
          isConsulting={isConsulting}
        />
        <ConsultingText>상담 중인 요청만 보기</ConsultingText>
      </FilterSelectRight>
    </FilterSelectZone>
  );
};

export default FilterSelect;
