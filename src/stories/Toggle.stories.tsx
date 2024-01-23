import type { Meta, StoryObj } from '@storybook/react';
import Toggle from '../components/toggle/Toggle';

const meta = {
    title: "Toggle",
    component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleSwitch : Story = {
    args: {
        
    }
}