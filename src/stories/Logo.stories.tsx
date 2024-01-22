import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../components/logo/Logo';

const meta = {
    title: "Logos",
    component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoLight : Story = {
    args: {
        logoType: "light",
        children: "Insert text"
    }
}

export const LogoDark : Story = {
    args: {
        logoType: "dark",
        children: "Insert text"
    }
}