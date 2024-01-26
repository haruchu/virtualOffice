"use client";
import { redirect, useRouter } from "next/navigation";
import { Room, RoomType } from "../components/atoms/room";
import { ButtonWrapper, Wrapper } from "./style";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getOfficeData } from "../action";

type Room = {
  roomName: string;
  roomId: number;
  roomType: RoomType;
  memberImages: string[];
};

const Home = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    (async () => {
      const officeId = localStorage.getItem("officeId") as string;
      const office = await getOfficeData(officeId);
      setRooms(
        office?.rooms.map((room) => ({
          roomName: room.name,
          roomId: room.roomId,
          roomType: room.roomType,
          memberImages: room.users.map((user) => user.image),
        })) as Room[]
      );
    })();
  }, []);

  if (session == null) redirect("/login");

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
          onClick={() => router.push(`/room/${room.roomName}/`)}
        />
      ))}
    </Wrapper>
  );
};

export default Home;
