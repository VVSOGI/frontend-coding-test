import React from "react";
import {
  NavigationBar,
  NavLeftCompanyLogo,
  NavRightOptions,
  NavRightCompanyTitle,
  NavRightCompanyIcons,
  NavRightCompanyText,
  NavRightLogout,
} from "./styles";

const Navigation: React.FC = () => {
  return (
    <NavigationBar>
      <NavLeftCompanyLogo>
        <span>CAPA</span>
        파트너스
      </NavLeftCompanyLogo>
      <NavRightOptions>
        <NavRightCompanyTitle>
          <NavRightCompanyIcons />
          <NavRightCompanyText>A 가공 업체</NavRightCompanyText>
        </NavRightCompanyTitle>
        <NavRightLogout>로그아웃</NavRightLogout>
      </NavRightOptions>
    </NavigationBar>
  );
};

export default Navigation;
