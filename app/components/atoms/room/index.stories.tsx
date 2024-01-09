import type { Meta, StoryObj } from "@storybook/react";
import sampleIcon from "../userIcon/sampleIcon.svg";

import { Room } from "./index";

const meta: Meta<typeof Room> = {
  title: "atoms/room",
  component: Room,
};

export default meta;
type Story = StoryObj<typeof Room>;

export const Room1: Story = {
  args: {
    roomName: "部屋",
    roomType: "1",
    memberImages: [sampleIcon],
  },
};

export const Room2: Story = {
  args: {
    roomName: "部屋",
    roomType: "2",
    memberImages: [...Array(2)].map((_) => sampleIcon),
  },
};

export const Room3: Story = {
  args: {
    roomName: "部屋",
    roomType: "3",
    memberImages: [...Array(2)].map((_) => sampleIcon),
  },
};

export const Room4: Story = {
  args: {
    roomName: "部屋",
    roomType: "4",
    memberImages: [...Array(2)].map((_) => sampleIcon),
  },
};

export const Room5: Story = {
  args: {
    roomName: "部屋",
    roomType: "5",
    memberImages: [...Array(4)].map((_) => sampleIcon),
  },
};

export const Room6: Story = {
  args: {
    roomName: "部屋",
    roomType: "6",
    memberImages: [...Array(6)].map((_) => sampleIcon),
  },
};

export const OverMember: Story = {
  args: {
    roomName: "部屋",
    roomType: "6",
    memberImages: [...Array(8)].map((_) => sampleIcon),
  },
};
