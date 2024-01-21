import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../components/typography/Typography';

const meta = {
    title: "Typography",
    component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header1 : Story = {
    args: {
        textType: "header1",
        children: "Header 1"
    }
}

export const Header2 : Story = {
    args: {
        textType: "header2",
        children: "Header 2"
    }
}

export const Header3 : Story = {
    args: {
        textType: "header3",
        children: "Header 3"
    }
}

export const Subtitle1 : Story = {
    args: {
        textType: "subtitle1",
        children: "Subtitle 1"
    }
}

export const Subtitle2 : Story = {
    args: {
        textType: "subtitle2",
        children: "Subtitle 2"
    }
}

export const body1 : Story = {
    args: {
        textType: "body1",
        children: "Body 1"
    }
}

export const body2 : Story = {
    args: {
        textType: "body2",
        children: "Body 2"
    }
}