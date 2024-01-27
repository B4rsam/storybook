import type { Meta, StoryObj } from '@storybook/react';
import Radio from "@/components/radio/Radio";

const meta = {
    title: "Radio Buttons",
    component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButtons : Story = {
    args: {
        radioName: "name"
    }
}
