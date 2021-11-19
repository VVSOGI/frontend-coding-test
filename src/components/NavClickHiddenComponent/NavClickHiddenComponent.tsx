import React from "react";
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
  return (
    <HiddenTotalContainer hiddenComponentOut={hiddenComponentOut ? "1" : "0"}>
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
        onClick={handleHiddenComponent}
        hiddenComponentOut={hiddenComponentOut ? "1" : "0"}
      />
    </HiddenTotalContainer>
  );
};

export default NavClickHiddenComponent;
