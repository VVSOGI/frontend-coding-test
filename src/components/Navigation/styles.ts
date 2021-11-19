import styled from "styled-components";
import BusinessIcon from "@material-ui/icons/Business";
import MenuIcon from "@material-ui/icons/Menu";
import { NavigationPropsCSSType } from "../../types/Types";

export const NavigationBar = styled.header<NavigationPropsCSSType>`
  height: 70px;
  background-color: #1565c0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  z-index: ${(props) => {
    return props.barClicked === "1" ? null : "10";
  }};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  @media only screen and (max-width: 480px) {
    height: 25px;
    justify-content: start;
    align-items: center;
    padding: 12px 23px;
  }
`;

export const NavLeftCompanyLogo = styled.div`
  margin: 25px 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  span {
    font-weight: 900;
    margin-right: 3px;
    font-size: 18px;

    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    margin: 0;
    font-size: 14px;
  }
`;

export const NavRightOptions = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavRightCompanyTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 25px 40px;

  ::before {
    content: "";
    position: absolute;
    background-color: #ffffff;
    width: 1px;
    height: 16px;
    right: -41%;
    top: 10%;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const NavRightCompanyIcons = styled(BusinessIcon)`
  width: 16.67px;
  transform: translateY(-2.5px);
  margin-right: 8px;
`;

export const NavRightCompanyText = styled.span``;

export const NavRightLogout = styled.div`
  margin: 25px 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const NavMenuIcon = styled(MenuIcon)`
  display: none !important;
  width: 18px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    display: inline-block !important;
    margin-right: 19px;
  }
`;
