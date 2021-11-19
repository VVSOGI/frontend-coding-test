import styled from "styled-components";

export const RequestMainContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 0 155px;
  position: relative;
  padding-bottom: 3rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 100px;
  }
  @media only screen and (max-width: 720px) {
    margin: 20px 50px;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 24px 20px;
  }
`;

export const RequestMainContentIsNull = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 1px solid #c2c2c2;
  color: #939fa5;
  border-radius: 4px;
`;
