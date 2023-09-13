import { ICON_TYPES } from '../Icon';
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
const TemplateDark = (args) => (
    <div style={{ backgroundColor: 'black', padding: '32px' }}>
        <Button {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
    children: 'Primary',
    icon: ICON_TYPES.filter,
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

export const Subtle = Template.bind({});
Subtle.args = {
    children: 'Subtle',
    variant: 'subtle',
};

export const SubtleWithIcon = Template.bind({});
SubtleWithIcon.args = {
    children: 'Subtle',
    variant: 'subtle',
    icon: ICON_TYPES.filter,
};

export const SubtleDisabled = Template.bind({});
SubtleDisabled.args = {
    children: 'Subtle',
    variant: 'subtle',
    isDisabled: true,
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
    children: 'Primary',
    size: 'big',
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
    children: 'Secondary',
    variant: 'secondary',
    size: 'big',
};

export const WhiteBig = TemplateDark.bind({});
WhiteBig.args = {
    children: 'White',
    variant: 'white',
    size: 'big',
};

export const SecondaryInvertedBig = TemplateDark.bind({});
SecondaryInvertedBig.args = {
    children: 'White',
    variant: 'secondary-inverted',
    size: 'big',
};