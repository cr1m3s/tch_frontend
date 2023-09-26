import PropTypes from "prop-types";
import ICON_TYPES from "../../shared/icon-types";


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
        case ICON_TYPES.facebook:
            return (
                <svg
                    {...props}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#1877F2"
                        d="M18 9c0-4.97-4.01-9-8.957-9C4.096 0 .086 4.03.086 9c0 4.492 3.275 8.215 7.558 8.89v-6.289H5.369V9h2.275V7.017c0-2.255 1.337-3.501 3.383-3.501.98 0 2.005.175 2.005.175v2.215h-1.13c-1.112 0-1.46.694-1.46 1.406V9h2.485l-.397 2.601h-2.087v6.29C14.725 17.215 18 13.492 18 9Z"
                    />
                </svg>
            );
        case ICON_TYPES.google:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path
                        fill="#4285F4"
                        fillRule="evenodd"
                        d="M16.18 8.182c0-.567-.05-1.113-.145-1.636H8.5V9.64h4.306a3.68 3.68 0 0 1-1.597 2.415v2.007h2.585c1.513-1.393 2.386-3.444 2.386-5.88Z"
                        clipRule="evenodd"
                    />
                    <path
                        fill="#34A853"
                        fillRule="evenodd"
                        d="M8.499 16c2.16 0 3.97-.716 5.294-1.938l-2.585-2.007c-.717.48-1.633.763-2.71.763-2.083 0-3.847-1.407-4.476-3.298H1.35v2.073A7.997 7.997 0 0 0 8.499 16Z"
                        clipRule="evenodd"
                    />
                    <path
                        fill="#FBBC05"
                        fillRule="evenodd"
                        d="M4.024 9.52c-.16-.48-.251-.993-.251-1.52s.09-1.04.25-1.52V4.407H1.352A7.997 7.997 0 0 0 .5 8c0 1.29.31 2.513.85 3.593L4.025 9.52Z"
                        clipRule="evenodd"
                    />
                    <path
                        fill="#EA4335"
                        fillRule="evenodd"
                        d="M8.499 3.182c1.174 0 2.229.403 3.058 1.196l2.294-2.294C12.466.793 10.655 0 8.5 0a7.997 7.997 0 0 0-7.15 4.407L4.023 6.48c.63-1.89 2.393-3.298 4.477-3.298Z"
                        clipRule="evenodd"
                    />
                </svg>
            );
        case ICON_TYPES.eye:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path
                        d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1.001 1.001 0 0 0 0-.8ZM12 18c-3.17 0-6.17-2.29-7.9-6C5.83 8.29 8.83 6 12 6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6Zm0-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                    />
                </svg>           
            );
        case ICON_TYPES.hidden:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <g clipPath="url(#a)">
                        <path d="M4.71 3.29a1.004 1.004 0 1 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a.998.998 0 0 0 1.42 0 .997.997 0 0 0 .219-1.095.998.998 0 0 0-.22-.325l-16-16ZM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56-.06.01Z" />
                        <path d="M12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72L5 7.87a15.891 15.891 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.479 9.479 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1-1.7.25Zm9.65-5.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.702 13.702 0 0 1-2.29 2.72L19 16.13a15.893 15.893 0 0 0 2.91-3.63 1 1 0 0 0-.04-1Z" />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case ICON_TYPES.checked:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <g fill="#000" clipPath="url(#a)">
                        <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14Z" />
                        <path d="M9.333 15.919 5.413 12A1 1 0 0 0 4 13.414l3.919 3.919a2 2 0 0 0 2.829 0L20 8.081a1 1 0 0 0-1.414-1.414L9.333 15.92Z" />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case ICON_TYPES.unchecked:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <g clipPath="url(#a)">
                        <path
                            fill="#000"
                            d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14Z"
                        />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case ICON_TYPES.user:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <g clipPath="url(#a)">
                        <path d="M4.71 3.29a1.004 1.004 0 1 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a.998.998 0 0 0 1.42 0 .997.997 0 0 0 .219-1.095.998.998 0 0 0-.22-.325l-16-16ZM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56-.06.01Z" />
                        <path d="M12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.478 9.478 0 0 0 3.23-.67l-1.58-1.58a7.739 7.739 0 0 1-1.7.25Zm9.65-5.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.741 7.741 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.696 13.696 0 0 1-2.29 2.72L19 16.13a15.888 15.888 0 0 0 2.91-3.63.999.999 0 0 0-.04-1Z" />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case ICON_TYPES.success: 
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    {...props}
                >
                    <path
                        fill="#66BE50"
                        d="M60 110c27.615 0 50-22.385 50-50S87.615 10 60 10 10 32.385 10 60s22.385 50 50 50Z"
                        />
                        <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={10}
                        d="m35 60.167 16.667 16.666L85 43.5"
                    />
                </svg>                
            )
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