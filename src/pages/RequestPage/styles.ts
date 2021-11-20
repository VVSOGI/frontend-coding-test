import styled from "styled-components";

export const RequestContainer = styled.section`
  height: 130vh;
  display: flex;
  flex-direction: column;
  position: relative;
  @media only screen and (max-width: 480px) {
    height: 100%;
    min-height: 100vh;
  }
`;

export const RequestTopContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 155px;
  margin-bottom: 32px;
  /* z-index: 6; */
  @media only screen and (max-width: 1024px) {
    margin: 40px 100px;
  }
  @media only screen and (max-width: 720px) {
    margin: 40px 50px;
  }
  @media only screen and (max-width: 480px) {
    margin: 24px 20px;
    margin-bottom: 8px;
  }
`;

export const ComingRequest = styled.span`
  font-size: 20px;
  font-weight: 600;
  height: 32px;
  display: flex;
  align-items: center;
  color: #323d45;
`;

export const ComingRequestDetail = styled.span`
  font-size: 16px;
  color: #323d45;
`;
