"use client";
import { ReactNode, useState } from "react";
import { IconWrapper, ToggleWrapper, Wrapper } from "./style";

interface ButtonType {
  icon: ReactNode;
  buttonType: "default";
}

interface ToggleButtonType {
  icon: ReactNode[]; // indexが０のiconはデフォルト、1のiconはactiveなときのもの
  buttonType: "toggle";
}

type ButtonProps = ButtonType | ToggleButtonType;

export const Button = ({ icon, buttonType }: ButtonProps) => {
  if (buttonType === "default")
    return (
      <Wrapper>
        <IconWrapper>{icon}</IconWrapper>
      </Wrapper>
    );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState(false);

  return (
    <ToggleWrapper onClick={() => setIsActive(!isActive)} isActive={isActive}>
      <IconWrapper>{isActive ? icon[1] : icon[0]}</IconWrapper>
    </ToggleWrapper>
  );
};
