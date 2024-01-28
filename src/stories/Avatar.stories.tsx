import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@/components/avatar/Avatar';

const meta = {
    title: "Avatar",
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeAvatar : Story = {
    args: {
        size: "l",
    }
}

export const ExtraLargeAvatar : Story = {
    args: {
        size: "xl",
    }
}