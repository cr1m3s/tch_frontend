import CourseCard from './CourseCard';

export default {
    title: 'components/CoursesGallery/CourseCard',
    component: CourseCard,
    args: {
        
    },
};

function Template(args) {
    return <CourseCard {...args} />;
}

export const Default = Template.bind({});
Default.args = {};