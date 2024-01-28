import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/card/card';

const meta = {
    title: "Card",
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cards : Story = {
    args: {
        titleText: "Title",
        subText: "Subtitle",
        caption: "Caption"
    }
}