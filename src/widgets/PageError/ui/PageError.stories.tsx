import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import PageError from "widgets/PageError/ui/PageError";

const meta = {
    title: "widget/PageError",
    component: PageError,
    // parameters: {
    //     layout: "centered",
    // },

    // tags: ["autodocs"],

    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
