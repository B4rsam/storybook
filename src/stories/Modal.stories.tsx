import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/modal/Modal';

const meta = {
    title: "Modal",
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modals : Story = {
    args: {
        placeholder: "Placeholder",
        submitBtn: "Submit",
        cancelBtn: "Cancel",
        titleText: "Modal title"
    }
}