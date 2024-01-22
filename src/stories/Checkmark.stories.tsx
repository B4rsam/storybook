import type { Meta, StoryObj } from '@storybook/react';
import Checkmark from '../components/checkmark/Checkmark';

const meta = {
    title: "Checkmark",
    component: Checkmark,
} satisfies Meta<typeof Checkmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallCheckmark : Story = {
    args: {
        boxSize: "small"
    }
}

export const MediumCheckmark : Story = {
    args: {
        boxSize: "medium"
    }
}