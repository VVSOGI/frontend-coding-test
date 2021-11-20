import React from "react";
import {
  NavigationBar,
  NavLeftCompanyLogo,
  NavRightOptions,
  NavRightCompanyTitle,
  NavRightCompanyIcons,
  NavRightCompanyText,
  NavRightLogout,
  NavMenuIcon,
} from "./styles";
import { NavigationPropsType } from "../../types/Types";

const Navigation: React.FC<NavigationPropsType> = ({
  handleHiddenComponent,
  hiddenComponentOut,
}) => {
  return (
    <NavigationBar barClicked={hiddenComponentOut ? "1" : "0"}>
      <NavMenuIcon
        onClick={() => {
          handleHiddenComponent(true);
        }}
      />
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
