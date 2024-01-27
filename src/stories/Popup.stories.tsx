import type { Meta, StoryObj } from '@storybook/react';
import Popup from '../components/popup/Popup';

const meta = {
    title: "Popups",
    component: Popup,
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Popups : Story = {
    args: {
        popupIcon: "warning",
        titleText: "Title",
        contentText: "Popup content",

    }
}