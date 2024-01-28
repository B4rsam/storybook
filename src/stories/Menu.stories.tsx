import type { Meta, StoryObj } from '@storybook/react';
import MenuBar from '@/components/navMenu/Menu.tsx';

const meta = {
    title: "Menu Bar",
    component: MenuBar,
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationBar : Story = {
    args: {
        logoType: "light",
        logoText: "Logo",

        btntype1: "tertiary",
        btntype2: "tertiary",
        btntype3: "tertiary",
        btntype4: "tertiary",
        btntype5: "primary",

        btntext1: "Click me",
        btntext2: "Click me",
        btntext3: "Click me",
        btntext4: "Click me",
        btntext5: "Im Important!",

        btnSizes: "medium",
    }
}