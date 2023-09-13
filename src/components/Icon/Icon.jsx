import PropTypes from "prop-types";

export const ICON_TYPES = {
    arrow: "arrow",
};

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
        case ICON_TYPES.arrow:
            return (
                <svg
                    {...props}
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.96967 6.21967C3.67678 6.51256 3.67678 6.98744 3.96967 7.28033L8.46967 11.7803C8.76256 12.0732 9.23744 12.0732 9.53033 11.7803L14.0303 7.28033C14.3232 6.98744 14.3232 6.51256 14.0303 6.21967C13.7374 5.92678 13.2626 5.92678 12.9697 6.21967L9 10.1893L5.03033 6.21967C4.73744 5.92678 4.26256 5.92678 3.96967 6.21967Z"
                    />
                </svg>
            );

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