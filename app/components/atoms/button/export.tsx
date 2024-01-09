"use client";
import { Button } from ".";
import { ImExit } from "react-icons/im";
import { LuScreenShare } from "react-icons/lu";
import { BiSolidVideoOff, BiSolidVideo } from "react-icons/bi";
import { BsFillMicMuteFill, BsFillMicFill } from "react-icons/bs";

// 退出ボタン
export const ExitButton = <Button icon={<ImExit />} buttonType="default" />;

// 画面共有ボタン
export const ShareButton = (
  <Button icon={<LuScreenShare />} buttonType="default" />
);

// マイクボタン
export const MikeButton = (
  <Button
    // eslint-disable-next-line react/jsx-key
    icon={[<BsFillMicMuteFill />, <BsFillMicFill />]}
    buttonType="toggle"
  />
);

// ビデオボタン
export const VideoButton = (
  // eslint-disable-next-line react/jsx-key
  <Button icon={[<BiSolidVideoOff />, <BiSolidVideo />]} buttonType="toggle" />
);
