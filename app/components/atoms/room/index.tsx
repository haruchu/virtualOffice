"use client";
import Image from "next/image";
import room1 from "./image/room1.svg";
import room2 from "./image/room2.svg";
import room3 from "./image/room3.svg";
import room4 from "./image/room4.svg";
import room5 from "./image/room5.svg";
import room6 from "./image/room6.svg";
import { UserIcon } from "../userIcon";
import { IconWrapper, RoomName, RoomWrapper } from "./style";

export type RoomType = "1" | "2" | "3" | "4" | "5" | "6";
type RoomProps = {
  roomName?: string;
  roomType: RoomType;
  memberImages: string[];
  isDisplay?: boolean;
  onClick?: () => void;
};

type EachRoomProps = {
  roomName?: string;
  roomImagePath: string;
  memberImages: string[];
  roomType: RoomType;
  limit: number;
  isDisplay?: boolean;
  onClick?: () => void;
};

export const Room = ({
  roomType,
  onClick,
  ...rest
}: RoomProps): JSX.Element => {
  switch (roomType) {
    case "1":
      return (
        <EachRoom
          roomImagePath={room1}
          roomType={roomType}
          limit={1}
          onClick={onClick}
          {...rest}
        />
      );
    case "2":
      return (
        <EachRoom
          roomImagePath={room2}
          roomType={roomType}
          limit={2}
          onClick={onClick}
          {...rest}
        />
      );
    case "3":
      return (
        <EachRoom
          roomImagePath={room3}
          roomType={roomType}
          limit={2}
          onClick={onClick}
          {...rest}
        />
      );
    case "4":
      return (
        <EachRoom
          roomImagePath={room4}
          roomType={roomType}
          limit={2}
          onClick={onClick}
          {...rest}
        />
      );
    case "5":
      return (
        <EachRoom
          roomImagePath={room5}
          roomType={roomType}
          limit={4}
          onClick={onClick}
          {...rest}
        />
      );
    case "6":
      return (
        <EachRoom
          roomImagePath={room6}
          roomType={roomType}
          limit={6}
          onClick={onClick}
          {...rest}
        />
      );
  }
};

const EachRoom = ({
  roomName,
  roomImagePath,
  memberImages,
  roomType,
  limit,
  isDisplay = false,
  onClick,
}: EachRoomProps) => {
  return (
    <RoomWrapper roomType={roomType} isDisplay={isDisplay} onClick={onClick}>
      {roomName && <RoomName className="room-name">{roomName}</RoomName>}
      <Image src={roomImagePath} alt={"room"} className="room-image" />
      {memberImages.map((img, index) => {
        return (
          <IconWrapper
            key={index}
            className={`user-${index + 1}`}
            hidden={index + 1 > limit}
          >
            <UserIcon imagePath={img} />
          </IconWrapper>
        );
      })}
    </RoomWrapper>
  );
};
