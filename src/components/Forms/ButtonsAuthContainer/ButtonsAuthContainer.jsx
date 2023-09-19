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


const ButtonsAuthContainer = ({disabled, text}) => {
    return (
        <BtnWrapper>
            <Button size="fluid" isDisabled={disabled}>
                {text}
            </Button>

            <Separator>
                <Line/>
                <OrText>or</OrText>
                <Line/>
            </Separator>

            <AuthBtns>
                <AuthButton>
                    <AuthButtonText>
                        Continue with Google
                    </AuthButtonText>
                </AuthButton>
                <AuthButton>
                    <AuthButtonText>
                        Continue with Facebook
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


export default ButtonsAuthContainer;