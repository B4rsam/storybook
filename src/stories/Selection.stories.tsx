import type { Meta, StoryObj } from '@storybook/react';
import Selection from '@/components/form/Selection';

const meta = {
    title: "Selection",
    component: Selection,
} satisfies Meta<typeof Selection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectionForm : Story = {
    args: {
        options: [{value:"test", label:"option 1"}],
        shape: "normal",
        className: "Selection",
    }
}