import { useAuthStore } from '../../../store/auth';
import { Title } from '../../common';
import { Wrapper } from './PersonalInfo.styled';


const PersonalInfo = () => {
    const { user } = useAuthStore();
    console.log(user);
    return (
        <Wrapper>
            <Title>My profile</Title>
            {/* <div>
                <img src={user.photo} alt="user avatar" />
                <div>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                </div>
            </div> */}
            <div>

            </div>
        </Wrapper>
    );
};

export default PersonalInfo;