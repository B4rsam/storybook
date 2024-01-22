import type { Meta, StoryObj } from '@storybook/react';
import Button from "@/components/button/Button.tsx";

const meta = {
    title: "Button",
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton : Story = {
    args: {
        children: "Click Me",
        btntype: "primary",
        size: "small"
    }
}

export const SecondaryButton : Story = {
    args: {
        children: "Click Me",
        btntype: "secondary",
        size: "small"
    }
}

export const TertiaryButton : Story = {
    args: {
        children: "Click Me",
        btntype: "tertiary",
        size: "small"
    }
}
