"use client";
import { redirect, useRouter } from "next/navigation";
import { Room, RoomType } from "../components/atoms/room";
import { ButtonWrapper, Wrapper } from "./style";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@mui/material";

const Home = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session == null) redirect("/login");

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
      <ButtonWrapper>
        {session && (
          <Image
            src={session.user?.image as string}
            alt="user profile photo"
            width={30}
            height={30}
          />
        )}
        <Button variant="contained" onClick={() => signOut()}>
          ログアウト
        </Button>
      </ButtonWrapper>
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
