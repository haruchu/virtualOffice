import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
    border: 1px solid #555;
  }

  &:active {
    background-color: #ddd;
    border: 1px solid #888;
  }
`;

export const IconWrapper = styled.span`
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleWrapper = styled.div<{ isActive: boolean }>`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isActive }) =>
    isActive
      ? `background-color: #ddd;
  border: 1px solid #888;`
      : `background-color: #fff;
  border: 1px solid #aaa;`}
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
    border: 1px solid #555;
  }

  &:active {
    background-color: #ddd;
    border: 1px solid #888;
  }
`;
