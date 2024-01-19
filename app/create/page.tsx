"use client";

import { Button, TextField } from "@mui/material";
import {
  FormTitle,
  FormWrapper,
  ReturnButtonWrapper,
  RoomCardWrapper,
  Wrapper,
} from "./style";
import { RoomCard } from "../components/atoms/roomCard";
import { RoomType } from "../components/atoms/room";
import { useState } from "react";
import OpenmojiReturn from "./icons/OpenmojiReturn";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState([
    {
      roomType: "1",
      coount: 0,
    },
    {
      roomType: "2",

      coount: 0,
    },
    {
      roomType: "3",
      coount: 0,
    },
    {
      roomType: "4",

      coount: 0,
    },
    {
      roomType: "5",
      coount: 0,
    },
    {
      roomType: "6",

      coount: 0,
    },
  ]);
  return (
    <Wrapper>
      <ReturnButtonWrapper>
        <Button
          variant="outlined"
          startIcon={<OpenmojiReturn />}
          onClick={() => router.push("/")}
        >
          戻る
        </Button>
      </ReturnButtonWrapper>
      <FormWrapper>
        <TextField
          id="outlined-basic"
          label="Office ID"
          variant="outlined"
          size="small"
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Office Name"
          variant="outlined"
          size="small"
          onChange={(e) => setName(e.target.value)}
        />
      </FormWrapper>
      <FormTitle>作成したい部屋の数を選択してください</FormTitle>
      <RoomCardWrapper>
        {rooms.map((room) => (
          <RoomCard
            key={room.roomType}
            roomType={room.roomType as RoomType}
            count={room.coount}
            updateCount={(count) => {
              const newRoom = rooms.map((r) => {
                if (r.roomType === room.roomType) {
                  return {
                    ...r,
                    coount: count,
                  };
                }
                return r;
              });
              setRooms(newRoom);
            }}
          />
        ))}
      </RoomCardWrapper>
      <Button
        variant="contained"
        onClick={() =>
          console.log({
            id,
            name,
            rooms,
          })
        }
      >
        作成
      </Button>
    </Wrapper>
  );
};

export default Create;
