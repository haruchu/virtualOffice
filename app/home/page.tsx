"use client";
import { redirect, useRouter } from "next/navigation";
import { Room, RoomType } from "../components/atoms/room";
import { Background, ButtonWrapper, Wrapper } from "./style";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { addUserToRoom, getOfficeData } from "../action";
import { User } from "next-auth";
import Pusher from "pusher-js";

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
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: "ap3",
    });

    var channel = pusher.subscribe("channel");
    channel.bind("event", async function (data: any) {
      const parsedComments = JSON.parse(data.message);

      setLog((prev) => [...prev, parsedComments]);
    });

    return () => {
      pusher.unsubscribe("channel");
    };
  }, []);

  useEffect(() => {
    const officeId = localStorage.getItem("officeId") as string;
    const getRooms = async () => {
      const office = await getOfficeData(officeId);

      if (office !== null && office !== undefined)
        setRooms(
          office?.rooms.map(
            (room: {
              name: string;
              roomId: number;
              roomType: string;
              users: User[];
            }) =>
              ({
                roomName: room.name,
                roomId: room.roomId,
                roomType: room.roomType,
                memberImages: room.users.map((user) => user.image),
              }) as Room
          )
        );

      setLoading(false);
    };
    getRooms();
  }, [log]);

  if (!session) redirect("/login");

  return (
    <Background>
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
          <Button
            variant="contained"
            onClick={() => {
              localStorage.removeItem("officeId");
              signOut();
            }}
          >
            ログアウト
          </Button>
        </ButtonWrapper>
        {loading ? (
          <span>Loading...</span>
        ) : rooms.length !== 0 ? (
          rooms.map((room) => (
            <Room
              key={room.roomId}
              roomName={room.roomName}
              roomType={room.roomType}
              memberImages={room.memberImages}
              onClick={() => {
                router.push(`/room/${room.roomName}/`);
                // @ts-ignore
                addUserToRoom(session.user?.id, room.roomId);
              }}
            />
          ))
        ) : (
          <span>部屋がありません</span>
        )}
      </Wrapper>
    </Background>
  );
};

export default Home;
