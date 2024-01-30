import type { Meta, StoryObj } from '@storybook/react';
import Table from '@/components/table/Table';

const meta = {
    title: "Table",
    component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tables : Story = {
    args: {
        tableContent: [["test" , "test2"] , ["also test"]],
        headerContent: ["col 1", "col 2"],
        withHead: true,
        className: "table",
    }
}