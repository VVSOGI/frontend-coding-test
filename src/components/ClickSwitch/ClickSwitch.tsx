import React, { useState } from "react";
import {
  ConsultingSwitch,
  ConsultingSwitchBack,
  ConsultingSwitchCircle,
} from "./styles";
import { ConsultingSwitchPropsType } from "../../types/Types";

const ClickSwitch: React.FC<ConsultingSwitchPropsType> = ({
  handleConsulting,
  isConsulting,
}) => {
  const [switchOnOff, setSwitchOnOff] = useState(false);

  const handleSwitchOnOff = () => {
    // Switch가 움직이는 것을 구현하기 위해서 state를 이용한다.
    // onOff의 불리언 값이 true면 불이 들어오고, false면 꺼진다.
    // Default는 false
    handleConsulting(true);
    setSwitchOnOff(!switchOnOff);
  };
  return (
    <ConsultingSwitch onClick={handleSwitchOnOff}>
      <ConsultingSwitchBack switchOnOff={isConsulting} />
      <ConsultingSwitchCircle switchOnOff={isConsulting} />
    </ConsultingSwitch>
  );
};

export default ClickSwitch;
