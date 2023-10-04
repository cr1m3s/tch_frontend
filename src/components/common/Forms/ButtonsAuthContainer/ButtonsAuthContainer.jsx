import { Button } from "../../Button/Button";
import PropTypes from 'prop-types';
import {
    BtnWrapper,
    Separator,
    Line,
    OrText,
    AuthBtns,
    AuthButton,
    AuthButtonText
} from "./ButtonsAuthContainer.styled";
import { Icon } from "../../Icon";


export const ButtonsAuthContainer = ({ disabled, text }) => {
    return (
        <BtnWrapper>
            <Button size="fluid" isDisabled={disabled}>
                {text}
            </Button>

            <Separator>
                <Line />
                <OrText>or</OrText>
                <Line />
            </Separator>

            <AuthBtns>
                <AuthButton>
                    <AuthButtonText>
                        <Icon name="google" size={18} />
                        <span>Continue with Google</span>
                    </AuthButtonText>
                </AuthButton>
                <AuthButton>
                    <AuthButtonText>
                        <Icon name="facebook" size={18} />
                        <span>Continue with Facebook</span>
                    </AuthButtonText>
                </AuthButton>
            </AuthBtns>
        </BtnWrapper>
    );
};


ButtonsAuthContainer.propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
};


