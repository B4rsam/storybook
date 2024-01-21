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
        size: "xs"
    }
}

export const SmallIcons : Story = {
    args: {
        size: "s"
    }
}

export const MediumIcons : Story = {
    args: {
        size: "m"
    }
}

export const largeIcons : Story = {
    args: {
        size: "l"
    }
}

export const ExtralargeIcons : Story = {
    args: {
        size: "xl"
    }
}