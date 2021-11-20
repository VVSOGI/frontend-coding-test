import React, { useEffect, useRef, useState } from "react";
import { hiddenComponentOutType } from "../../types/Types";
import {
  HiddenTotalContainer,
  HiddenBackground,
  HiddenContainer,
  HiddenHeader,
  HiddenHeaderTitle,
  HiddenContent,
  HiddenPartnerProcessIcon,
} from "./styles";

const NavClickHiddenComponent: React.FC<hiddenComponentOutType> = ({
  handleHiddenComponent,
  hiddenComponentOut,
}) => {
  const [controllTime, setControllTime] = useState(false);
  const indexRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setControllTime(true);
    }, 500);
    if (!hiddenComponentOut && !controllTime) {
      indexRef.current!.style.zIndex = "-1";
    } else if (!hiddenComponentOut && controllTime) {
      setTimeout(() => {
        indexRef.current!.style.zIndex = "-1";
      }, 500);
    } else if (hiddenComponentOut) {
      indexRef.current!.style.zIndex = "10";
    }
  }, [hiddenComponentOut]);

  return (
    <HiddenTotalContainer
      ref={indexRef}
      hiddenComponentOut={hiddenComponentOut ? "1" : "0"}
    >
      <HiddenContainer hiddenComponentOut={hiddenComponentOut ? "1" : "0"}>
        <HiddenHeader>
          <HiddenHeaderTitle>
            <span>CAPA</span>
            파트너스
          </HiddenHeaderTitle>
        </HiddenHeader>
        <HiddenContent>
          <HiddenPartnerProcessIcon /> 파트너정밀가공
        </HiddenContent>
        <HiddenContent>로그아웃</HiddenContent>
      </HiddenContainer>
      <HiddenBackground
        onClick={() => {
          handleHiddenComponent(false);
        }}
        hiddenComponentOut={hiddenComponentOut ? "1" : "0"}
      />
    </HiddenTotalContainer>
  );
};

export default NavClickHiddenComponent;
