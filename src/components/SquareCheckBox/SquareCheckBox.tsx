import React, { useEffect, useState } from "react";
import { ProcessMethodAndIngredient } from "../../types/Types";
import {
  SquareCheckBoxContainer,
  SquareCheckBoxThing,
  SquareCheckIcon,
  CheckBoxText,
} from "./styles";

const SquareCheckBox: React.FC<ProcessMethodAndIngredient> = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (props.handleClickId) props.handleClickId(props.id);
  };

  useEffect(() => {
    const deliverIdArr = props.isClicked
      ? props.isClicked.slice().sort()
      : null;
    const clickThisItem = deliverIdArr?.filter(
      (item) => item === props.id
    ).length;
    if (clickThisItem) {
      setIsClicked(!isClicked);
    }
  }, []);

  return (
    <SquareCheckBoxContainer onClick={handleClick}>
      <SquareCheckBoxThing isClicked={isClicked}>
        <SquareCheckIcon />
      </SquareCheckBoxThing>
      <CheckBoxText>{props.title}</CheckBoxText>
    </SquareCheckBoxContainer>
  );
};

export default SquareCheckBox;
