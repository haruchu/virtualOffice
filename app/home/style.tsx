import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    height: auto;
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
