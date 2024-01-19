"use client";

import { TextField } from "@mui/material";
import { FormTitle, FormWrapper, RoomCardWrapper, Wrapper } from "./style";
import { RoomCard } from "../components/atoms/roomCard";
import { RoomType } from "../components/atoms/room";

const Create = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <TextField
          id="outlined-basic"
          label="Office ID"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Office Name"
          variant="outlined"
          size="small"
        />
      </FormWrapper>
      <FormTitle>作成したい部屋の数を選択してください</FormTitle>
      <RoomCardWrapper>
        {Array(...Array(6)).map((_, i) => (
          <RoomCard
            key={i + 1}
            roomType={(i + 1).toString() as RoomType}
            count={1}
            updateCount={() => console.log("s")}
          />
        ))}
      </RoomCardWrapper>
    </Wrapper>
  );
};

export default Create;
