import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
	title: "UI/MyLabel",
	component: MyLabel,
	argTypes: {
		size: { control: "select" },
		color: { control: "select" },
		customFontColor: { control: "color" },
	},
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	size: "normal",
	allCaps: false,
	color: "primary",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: "normal",
	allCaps: true, //true: Capitalizar toda la palabra
};
export const Secondary = Template.bind({});

Secondary.args = {
	size: "normal",
	color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: "normal",
	color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
	customFontColor: "#5517ac",
	size: "h1",
};
