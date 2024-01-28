import type { Meta, StoryObj } from '@storybook/react';
import Banner from '@/components/banner/Banner';

const meta = {
    title: "Banner",
    component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoBanner : Story = {
    args: {
        bannerMessage: "Banner Message",
        bannerType: "info"
    }
}

export const AlertBanner : Story = {
    args: {
        bannerMessage: "Banner Message",
        bannerType: "alert"
    }
}

export const SuccessBanner : Story = {
    args: {
        bannerMessage: "Banner Message",
        bannerType: "success"
    }
}