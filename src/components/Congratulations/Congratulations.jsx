import { Icon } from "../Icon";
import Message from "../Message/Message";
import Title from "../Title/Title";
import { Button } from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { Section, SuccessWrapper, } from "./Congratulations.styled";



const Congratulations = () => {
    const location = useLocation();
    const backMainPage = useRef(location.state?.from ?? "/");

    return (
        <Section>
            <SuccessWrapper>
                <Title
                    indent={32}
                >
                    Congratulations!
                </Title>

                <Icon
                    name={"success"}
                    size={120}
                />

                <Message
                    indentTop={24}
                    indentBottom={48}
                >
                    Your new email has been set
                </Message>

                <Button size="fluid">
                    <Link to={backMainPage.current}>Back to main page</Link>
                </Button>
            </SuccessWrapper>
        </Section>
    );
};


export default Congratulations;