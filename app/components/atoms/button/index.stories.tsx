import type { Meta, StoryObj } from "@storybook/react";
import { ImExit } from "react-icons/im";
import { LuScreenShare } from "react-icons/lu";
import { BiSolidVideoOff, BiSolidVideo } from "react-icons/bi";
import { BsFillMicMuteFill, BsFillMicFill } from "react-icons/bs";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "atoms/button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Exit: Story = {
  args: {
    icon: <ImExit />,
    buttonType: "default",
  },
};

export const Share: Story = {
  args: {
    icon: <LuScreenShare />,
    buttonType: "default",
  },
};

export const Mike: Story = {
  args: {
    // eslint-disable-next-line react/jsx-key
    icon: [<BsFillMicMuteFill />, <BsFillMicFill />],
    buttonType: "toggle",
  },
};

export const Video: Story = {
  args: {
    // eslint-disable-next-line react/jsx-key
    icon: [<BiSolidVideoOff />, <BiSolidVideo />],
    buttonType: "toggle",
  },
};
