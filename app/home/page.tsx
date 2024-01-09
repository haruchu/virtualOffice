"use client";
import { useRouter } from "next/navigation";
import { Room, RoomType } from "../components/atoms/room";
import { Wrapper } from "./style";

const Home = () => {
  const router = useRouter();

  // room一覧、部屋に参加しているユーザーは今後DBからとってくる
  const rooms: {
    roomName: string;
    roomId: string;
    roomType: RoomType;
    memberImages: string[];
  }[] = [
    {
      roomName: "部屋１",
      roomId: "room1",
      roomType: "2",
      memberImages: [],
    },
    {
      roomName: "部屋2",
      roomId: "room2",
      roomType: "4",
      memberImages: [],
    },
    {
      roomName: "部屋3",
      roomId: "room3",
      roomType: "6",
      memberImages: [],
    },
  ];

  return (
    <Wrapper>
      {rooms.map((room) => (
        <Room
          key={room.roomId}
          roomName={room.roomName}
          roomType={room.roomType}
          memberImages={room.memberImages}
          onClick={() => router.push(`/room/${room.roomId}/`)}
        />
      ))}
    </Wrapper>
  );
};

export default Home;
