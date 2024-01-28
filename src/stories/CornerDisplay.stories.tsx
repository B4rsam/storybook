import type { Meta, StoryObj } from '@storybook/react';
import CornerDisplay from '@/components/cornerDisplay/CornerDisplay';

const meta = {
    title: "Corners",
    component: CornerDisplay,
} satisfies Meta<typeof CornerDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cards : Story = {
    args: {
        type: "card",
    }
}

export const Inputs : Story = {
    args: {
        type: "input",
    }
}