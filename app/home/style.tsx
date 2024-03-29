import styled from "styled-components";
import bg from "./images/floor.jpg";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bg.src});
  background-repeat: repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    padding: 80px 0;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  align-items: center;

  & img {
    border-radius: 50%;
  }
`;
