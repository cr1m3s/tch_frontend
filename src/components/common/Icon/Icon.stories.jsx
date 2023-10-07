import ICON_TYPES from "../../../shared";
import { Icon } from "./Icon";

export default {
    title: 'components/Icon',
    component: Icon,
    argTypes: {
        name: {
            options: Object.values(ICON_TYPES),
            control: { type: 'select' },
        },
        color: {
            control: { type: 'color' },
        },
        size: {
            control: { type: 'range', min: 10, max: 100 },
        },
    },
};

const Template = (args) => <Icon {...args} />;

export const Single = Template.bind({});
Single.args = {
    name: ICON_TYPES.arrow,
};

export const Multiple = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Object.values(ICON_TYPES).map((icon) => (
                <div key={icon} style={{ margin: '8px' }}>
                    <Icon size={32} name={icon} />
                </div>
            ))}
        </div>
    );
};
