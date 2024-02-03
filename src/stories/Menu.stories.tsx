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
        btnList: [{children: "Click Me", type: "tertiary"},
                  {children: "Click Me", type: "primary"}],
        btnSizes: "medium",
    }
}