"use client";
import { StyledImage, Wrapper } from "./style";

type UserIconProps = {
  imagePath: string;
};

export const UserIcon = ({ imagePath }: UserIconProps): JSX.Element => {
  return (
    <Wrapper>
      <StyledImage src={imagePath} />
    </Wrapper>
  );
};
