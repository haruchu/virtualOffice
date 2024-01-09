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
  roomName: string;
  roomType: RoomType;
  memberImages: string[];
  onClick: () => void;
};

type EachRoomProps = {
  roomName: string;
  roomImagePath: string;
  memberImages: string[];
  roomType: RoomType;
  limit: number;
  onClick: () => void;
};

export const Room = ({
  roomName,
  roomType,
  memberImages,
  onClick,
}: RoomProps): JSX.Element => {
  switch (roomType) {
    case "1":
      return (
        <EachRoom
          roomName={roomName}
          roomImagePath={room1}
          memberImages={memberImages}
          roomType={roomType}
          limit={1}
          onClick={onClick}
        />
      );
    case "2":
      return (
        <EachRoom
          roomName={roomName}
          roomImagePath={room2}
          memberImages={memberImages}
          roomType={roomType}
          limit={2}
          onClick={onClick}
        />
      );
    case "3":
      return (
        <EachRoom
          roomName={roomName}
          roomImagePath={room3}
          memberImages={memberImages}
          roomType={roomType}
          limit={2}
          onClick={onClick}
        />
      );
    case "4":
      return (
        <EachRoom
          roomName={roomName}
          roomImagePath={room4}
          memberImages={memberImages}
          roomType={roomType}
          limit={2}
          onClick={onClick}
        />
      );
    case "5":
      return (
        <EachRoom
          roomName={roomName}
          roomImagePath={room5}
          memberImages={memberImages}
          roomType={roomType}
          limit={4}
          onClick={onClick}
        />
      );
    case "6":
      return (
        <EachRoom
          roomName={roomName}
          roomImagePath={room6}
          memberImages={memberImages}
          roomType={roomType}
          limit={6}
          onClick={onClick}
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
  onClick,
}: EachRoomProps) => {
  return (
    <RoomWrapper roomType={roomType} onClick={onClick}>
      <RoomName className="room-name">{roomName}</RoomName>
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
