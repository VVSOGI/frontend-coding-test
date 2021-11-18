import styled from "styled-components";
import BusinessIcon from "@material-ui/icons/Business";

export const NavigationBar = styled.header`
  height: 70px;
  background-color: #1565c0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24); ;
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
  }
  &:hover {
    cursor: pointer;
  }
`;

export const NavRightOptions = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
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
