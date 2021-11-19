import React, { useState } from "react";
import {
  ConsultingSwitch,
  ConsultingSwitchBack,
  ConsultingSwitchCircle,
} from "./styles";

const ClickSwitch: React.FC = () => {
  const [switchOnOff, setSwitchOnOff] = useState(false);

  const handleSwitchOnOff = () => {
    // Switch가 움직이는 것을 구현하기 위해서 state를 이용한다.
    // onOff의 불리언 값이 true면 불이 들어오고, false면 꺼진다.
    // Default는 false

    setSwitchOnOff(!switchOnOff);
  };

  const handlePropFunction = () => {
    // 잘 모듈화된 스위치를 만들기 위해서 props로 들어오는 기능을 이 함수에 담아
    // 사용할 수 있게끔 한다.
  };

  return (
    <ConsultingSwitch onClick={handleSwitchOnOff}>
      <ConsultingSwitchBack switchOnOff={switchOnOff} />
      <ConsultingSwitchCircle switchOnOff={switchOnOff} />
    </ConsultingSwitch>
  );
};

export default ClickSwitch;
