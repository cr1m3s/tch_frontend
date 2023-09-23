import PropTypes from "prop-types";
import { ICON_TYPES } from "./IconsData";



export const Icon = ({ className, name, size, color }) => {
    const props = {
        className,
    };
    if (size) {
        props.width = size;
        props.height = size;
    }
    if (color) {
        props.fill = color;
    }
    switch (name) {
        case ICON_TYPES.time:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    {...props}
                >
                    <path
                        fillRule="evenodd"
                        d="M11 .25C6.171.25 2.25 4.171 2.25 9c0 4.829 3.921 8.75 8.75 8.75 4.829 0 8.75-3.921 8.75-8.75 0-4.829-3.921-8.75-8.75-8.75Zm0 1.5A7.254 7.254 0 0 1 18.25 9 7.254 7.254 0 0 1 11 16.25 7.254 7.254 0 0 1 3.75 9 7.254 7.254 0 0 1 11 1.75Z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M9.6 5.168 9.155 6.53H7.723a1.473 1.473 0 0 0-.866 2.665l1.16.842-.443 1.363a1.474 1.474 0 0 0 2.267 1.647l1.16-.842 1.158.842a1.474 1.474 0 0 0 2.267-1.647l-.443-1.363 1.16-.842a1.474 1.474 0 0 0-.866-2.665h-1.433l-.443-1.363a1.473 1.473 0 0 0-2.802 0Zm1.4.542.586 1.803c.1.309.388.518.713.518h1.895l-1.533 1.114a.75.75 0 0 0-.272.839l.585 1.802-1.533-1.114a.75.75 0 0 0-.882 0l-1.533 1.114.585-1.802a.75.75 0 0 0-.272-.84L7.806 8.032h1.895a.749.749 0 0 0 .713-.518L11 5.71ZM19.69 16.995l-1.871.277a1.249 1.249 0 0 0-.915.641l-.901 1.663-2.104-3.006a.75.75 0 0 0-1.229.86l2.337 3.337a1.248 1.248 0 0 0 2.123-.121l1.033-1.909 2.147-.318a1.25 1.25 0 0 0 .84-1.953l-2.536-3.622a.75.75 0 1 0-1.228.86l2.304 3.291ZM3.837 18.737l1.033 1.909a1.248 1.248 0 0 0 2.123.121L9.33 17.43a.75.75 0 1 0-1.229-.86l-2.104 3.006-.9-1.663a1.249 1.249 0 0 0-.916-.641l-1.87-.277 2.303-3.291a.75.75 0 1 0-1.228-.86L.85 16.466a1.25 1.25 0 0 0 .84 1.953l2.147.318Z"
                        clipRule="evenodd"
                    />
                </svg>
            );
        // case ICON_TYPES.logoFooter:
        //     return (

        //     )
        default:
            return null;
    }
};

Icon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.oneOf(Object.values(ICON_TYPES)).isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};