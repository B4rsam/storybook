import type { Meta, StoryObj } from '@storybook/react';
import Form from '@/components/form/Form';

const meta = {
    title: "Forms",
    component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextForm : Story = {
    args: {
        placeHolder: "Placeholder",
        shape: "normal",
        icon: "none",
    }
}