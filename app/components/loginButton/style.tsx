import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;
