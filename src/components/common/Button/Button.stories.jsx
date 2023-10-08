import ICON_TYPES from '../../../shared/icon-types';
import { Button } from './Button';

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {
        icon: {
            options: Object.values(ICON_TYPES),
            control: { type: 'select' },
        },
        iconPosition: { control: 'inline-radio', options: ['left', 'right'] },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
    children: 'Primary',
    icon: ICON_TYPES.arrow,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    children: 'Primary',
    isDisabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary',
    variant: 'secondary',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    children: 'Secondary',
    variant: 'secondary',
    isDisabled: true,
};
