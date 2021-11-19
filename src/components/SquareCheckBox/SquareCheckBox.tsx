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
    if (props.handleClickItem) {
      props.handleClickItem(props.title, props.type);
    }
  };

  useEffect(() => {
    const deliverIdArr = props.isClicked
      ? props.isClicked.slice().sort()
      : null;
    const clickThisItem = deliverIdArr?.filter(
      (item) => item === props.title
    ).length;
    if (clickThisItem) {
      setIsClicked(!isClicked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
