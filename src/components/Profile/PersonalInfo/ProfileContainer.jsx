import { useAuthStore } from '../../../store/auth';
import { Icon } from '../../common';
import {
    Section,
    ContainerWrapper,
    LogoutBtn,
} from './ProfileContainer.styled';


const ProfileContainer = () => {
    const { logout } = useAuthStore();

    return (
        <Section>
            <LogoutBtn
                type='button'
                onClick={logout}
            >
                <span>Log out</span>
                <Icon
                    name='logout'
                    size={24}
                />
            </LogoutBtn>
            <ContainerWrapper>
                user info
            </ContainerWrapper>
        </Section>
    );
};

export default ProfileContainer;