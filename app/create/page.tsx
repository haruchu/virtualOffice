"use client";

import { TextField } from "@mui/material";
import { FormWrapper, Wrapper } from "./style";

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

      
    </Wrapper>
  );
};

export default Create;
