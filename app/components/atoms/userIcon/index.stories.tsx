import type { Meta, StoryObj } from "@storybook/react";

import { UserIcon } from "./index";

const meta: Meta<typeof UserIcon> = {
  title: "atoms/userIcon",
  component: UserIcon,
};

export default meta;
type Story = StoryObj<typeof UserIcon>;

export const Default: Story = {
  args: {
    imagePath:
      "https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_1.png",
  },
};
