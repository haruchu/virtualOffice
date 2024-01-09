import styled from "styled-components";
import { videoStyle } from "./videoStyle";
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: 100vh;
  padding: 0 30px;
`;

export const RoomName = styled.h2``;

export const VideoContent = styled.div<{ memberCount: number }>`
  @media screen and (min-width: 900px) {
    width: 50%;
  }
  display: grid;
  flex-wrap: wrap;
  gap: 10px;
  ${({ memberCount }) => `${videoStyle(memberCount)}`}
`;

export const LocalVideo = styled.video<{
  isVideoEnabled: boolean;
}>`
  width: 130px;
  height: 100px;
  bottom: 50px;
  @media screen and (min-width: 600px) {
    width: 170px;
    height: 120px;
    bottom: 5px;
  }
  @media screen and (min-width: 1000px) {
    width: 300px;
    height: 200px;
  }
  object-fit: cover;
  border-radius: 12px;
  background-color: black;
  overflow: hidden;
  position: absolute;
  right: 5px;
`;

export const RemoteVideo = styled.video<{
  isLarge?: boolean;
}>`
  width: 100%;
  cursor: pointer;
  object-fit: cover;
  border-radius: 12px;
  background-color: black;

  ${({ isLarge }) =>
    isLarge
      ? `
      position: absolute;
      top:0;
      left:0;
      z-index: 10;
      height: 100%;
      width: 100%;
      outline: none;
`
      : `
      z-index: 1;
`}
`;

export const ToolsWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
`;

export const ButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 600px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 1000px) {
    width: 80px;
    height: 80px;
  }
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
  font-size: 16px;
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 36px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleWrapper = styled.button<{ isActive: boolean }>`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 600px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 1000px) {
    width: 80px;
    height: 80px;
  }
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
