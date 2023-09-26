import Subtitle from "../Subtitle/Subtitle";
import Text from "../Text/Text";
import Title from "../Title/Title";
import { Section, Wrapper, Item } from "./Conditions.styled";


const Conditions = () => {
    return (
        <Section>
            <Wrapper>
                <Title>Terms of Use SKILL STREAM</Title>

                <div>
                    <Subtitle>Profile Information</Subtitle>
                    <Text>By registering a candidate profile on SKILL STREAM, you are responsible for the veracity of the information in your profile: personal data and contacts, resume, location, etc.</Text>
                </div>

                <div>
                    <Subtitle>Rules of communication</Subtitle>
                    <Text>There are only three basic rules of communication:</Text>
                </div>

                <ul>
                    <Item>
                        obscene remarks and harassment in communication with employers are unacceptable
                    </Item>
                    <Item>
                        do not send irrelevant offers (spam) and everything that does not concern job search
                    </Item>
                    <Item>
                        correspondence with recruiters on djinni private, do not distribute it on third-party resources
                    </Item>
                </ul>

                <div>
                    <Subtitle>Account blocking</Subtitle>
                    <Text>We reserve the right to block your profile in the following cases:</Text>
                </div>

                <ul>
                    <Item>
                        you advertise the business services of a company or team, rather than looking for a job for yourself
                    </Item>
                    <Item>
                        obscene expression and violation of ethical norms of communication
                    </Item>
                    <Item>
                        spam sending
                    </Item>                
                    <Item>
                        the information in your profile and resume is false
                    </Item>
                </ul>
            </Wrapper>
        </Section>
    );
};

export default Conditions;