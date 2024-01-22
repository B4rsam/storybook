import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../components/icon/Icon';

const meta = {
    title: "Icons",
    component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraSmallIcons : Story = {
    args: {
        size: "xs",
        icon: "warning"
    }
}

export const SmallIcons : Story = {
    args: {
        size: "s",
        icon: "warning"
    }
}

export const MediumIcons : Story = {
    args: {
        size: "m",
        icon: "warning"
    }
}

export const largeIcons : Story = {
    args: {
        size: "l",
        icon: "warning"
    }
}

export const ExtraLargeIcons : Story = {
    args: {
        size: "xl",
        icon: "warning"
    }
}