import { Header } from './Header';

export default {
    title: 'components/',
    component: Header,
};

function Template(args) {
    return <Header {...args} />;
}

export const Default = Template.bind({});
Default.args = {

};
