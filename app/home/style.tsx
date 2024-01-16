import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
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
