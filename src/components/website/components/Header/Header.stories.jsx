import { Header } from './Header';

export default {
    title: 'components/website/components/Header',
    component: Header,
};

function Template(args) {
    return <Header {...args} />;
}

export const Desktop = Template.bind({});
Desktop.args = {

};

