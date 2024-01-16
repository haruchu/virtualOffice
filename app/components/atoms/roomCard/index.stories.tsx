import { RoomCard } from "./index";
import { useState } from "react";

export default {
  title: "atoms/roomCard",
  component: RoomCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    () => {
      const [count, setCount] = useState(0);
      return (
        <RoomCard
          roomType="2"
          count={count}
          updateCount={(count) => setCount(count)}
        />
      );
    },
  ],
};

const Template = (args: any) => <RoomCard {...args} />;
export const Default = Template.bind({});
