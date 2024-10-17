import type { Meta, StoryObj } from "@storybook/react";
import { WhiteButton } from "./WhiteButton";

const meta = {
    title: "Component/WhiteButton",
    component: WhiteButton,
    argTypes: {
        onClick: { action: "clicked" },
    },
} as Meta<typeof WhiteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのストーリー
export const Default: Story = {
    args: {
        children: "次に進む",
        type: "button",
        disabled: false,
        className: "",
    },
};

// リンクボタンのストーリー
export const Link: Story = {
  args: {
      children: "トップに戻る",
      type: "button",
      disabled: false,
      className: "",
  },
};
