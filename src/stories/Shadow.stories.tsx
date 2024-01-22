import type { Meta, StoryObj } from '@storybook/react';
import ShadowBox from '../components/shadow/Shadow';

const meta = {
    title: "Shadows",
    component: ShadowBox,
} satisfies Meta<typeof ShadowBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeavyShadow : Story = {
    args: {
        type: 1,
    }
}

export const LightShadow : Story = {
    args: {
        type: 2,
    }
}