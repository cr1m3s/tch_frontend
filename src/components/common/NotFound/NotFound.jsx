import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { Button } from "../Button/Button";
import {
    Section,
    NotFoundWrapper,
    ErrorTitle,
    Subtitle,
    SorryText,
    GoBackText
} from "./NotFound.styled";



export const NotFound = () => {
    const location = useLocation();
    const goBackHome = useRef(location.state?.from ?? "/");

    return (
        <Section>
            <NotFoundWrapper>
                <ErrorTitle>404</ErrorTitle>

                <Subtitle>Page not found</Subtitle>
                <SorryText>We are sorry the page you requested could not be found</SorryText>
                <GoBackText>Please go back to the homepage</GoBackText>

                <Button
                    size="standard"
                    type="button"
                >
                    <Link to={goBackHome.current}>Home</Link>
                </Button>
            </NotFoundWrapper>
        </Section>

    );
}

