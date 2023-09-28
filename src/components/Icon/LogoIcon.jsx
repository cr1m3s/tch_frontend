import PropTypes from "prop-types";
import ICON_TYPES from "../../shared/icon-types";



export const LogoIcon = ({ className, name, size, color }) => {
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
        case ICON_TYPES.logoHeader:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={71}
                    height={70}
                    fill="none"
                    {...props}
                >
                    <mask
                        id="a"
                        width={71}
                        height={70}
                        x={0}
                        y={0}
                        maskUnits="userSpaceOnUse"
                        style={{
                            maskType: "luminance",
                        }}
                    >
                        <path fill="#fff" d="M70.5 0H.5v70h70V0Z" />
                    </mask>
                    <g mask="url(#a)">
                        <path
                            fill="url(#b)"
                            d="M57.678 19.734a5.68 5.68 0 0 0 4.208-5.46v-.015a5.645 5.645 0 0 0-5.645-5.645h-.015a5.677 5.677 0 0 0-5.46 4.208 15.837 15.837 0 0 1-30.531 0 5.678 5.678 0 0 0-5.46-4.208h-.015a5.645 5.645 0 0 0-5.646 5.646v.015a5.678 5.678 0 0 0 4.209 5.46 15.836 15.836 0 0 1 0 30.531 5.678 5.678 0 0 0-4.208 5.46v.014a5.646 5.646 0 0 0 5.645 5.646h.015a5.678 5.678 0 0 0 5.46-4.209 15.837 15.837 0 0 1 30.531 0 5.68 5.68 0 0 0 5.46 4.209h.015a5.646 5.646 0 0 0 5.645-5.646v-.015a5.678 5.678 0 0 0-4.208-5.46 15.836 15.836 0 0 1 0-30.531Z"
                        />
                        <path
                            fill="url(#c)"
                            d="M7.885 3.342a1.232 1.232 0 0 0 1.41.233 11.269 11.269 0 0 1 12.839 2.15 1.252 1.252 0 0 0 1.736.04 1.23 1.23 0 0 0 .02-1.757A13.73 13.73 0 0 0 8.204 1.374a1.226 1.226 0 0 0-.32 1.968Z"
                        />
                        <path
                            fill="url(#d)"
                            d="M1.878 7.695A13.73 13.73 0 0 0 4.466 23.35a1.262 1.262 0 0 0 1.65.154 1.228 1.228 0 0 0 .129-1.85A11.27 11.27 0 0 1 4.078 8.789a1.233 1.233 0 0 0-.723-1.715 1.227 1.227 0 0 0-1.477.622Z"
                        />
                        <path
                            fill="url(#e)"
                            d="M61.707 66.426a11.267 11.267 0 0 1-12.842-2.153 1.25 1.25 0 0 0-1.731-.04 1.226 1.226 0 0 0-.023 1.76 13.731 13.731 0 0 0 15.686 2.634 1.228 1.228 0 0 0 .621-1.477 1.225 1.225 0 0 0-.97-.832 1.23 1.23 0 0 0-.741.108Z"
                        />
                        <path
                            fill="url(#f)"
                            d="M64.733 46.633a1.248 1.248 0 0 0 .04 1.731 11.267 11.267 0 0 1 2.148 12.851 1.234 1.234 0 0 0 .723 1.713 1.225 1.225 0 0 0 1.477-.62 13.727 13.727 0 0 0-2.626-15.698 1.228 1.228 0 0 0-1.762.023Z"
                        />
                        <path
                            fill="url(#g)"
                            d="M66.923 8.79a11.268 11.268 0 0 1-2.15 12.847 1.25 1.25 0 0 0-.04 1.73 1.228 1.228 0 0 0 1.76.024 13.729 13.729 0 0 0 2.63-15.693 1.226 1.226 0 0 0-2.31.35c-.04.253-.002.512.11.742Z"
                        />
                        <path
                            fill="url(#h)"
                            d="M48.864 5.728a11.269 11.269 0 0 1 12.847-2.15 1.232 1.232 0 0 0 1.757-1.299 1.224 1.224 0 0 0-.665-.902 13.729 13.729 0 0 0-15.693 2.63 1.229 1.229 0 0 0 .023 1.76 1.25 1.25 0 0 0 1.73-.039Z"
                        />
                        <path
                            fill="url(#i)"
                            d="M22.137 64.272a11.27 11.27 0 0 1-12.847 2.15 1.235 1.235 0 0 0-1.41.234 1.226 1.226 0 0 0 .318 1.968 13.728 13.728 0 0 0 15.693-2.631 1.228 1.228 0 0 0-.024-1.76 1.25 1.25 0 0 0-1.73.04Z"
                        />
                        <path
                            fill="url(#j)"
                            d="M4.077 61.211a11.268 11.268 0 0 1 2.15-12.847 1.25 1.25 0 0 0 .04-1.73 1.228 1.228 0 0 0-1.76-.024 13.73 13.73 0 0 0-2.63 15.693 1.226 1.226 0 0 0 2.31-.35 1.233 1.233 0 0 0-.11-.742Z"
                        />
                    </g>
                    <defs>
                        <linearGradient
                            id="b"
                            x1={35.5}
                            x2={35.5}
                            y1={66.188}
                            y2={25.026}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="c"
                            x1={15.887}
                            x2={15.887}
                            y1={66.205}
                            y2={25.032}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="d"
                            x1={3.551}
                            x2={3.551}
                            y1={66.182}
                            y2={25.03}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="e"
                            x1={55.114}
                            x2={55.114}
                            y1={66.185}
                            y2={25.018}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="f"
                            x1={67.453}
                            x2={67.453}
                            y1={66.186}
                            y2={25.025}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="g"
                            x1={67.453}
                            x2={67.453}
                            y1={66.186}
                            y2={25.023}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="h"
                            x1={55.117}
                            x2={55.117}
                            y1={66.207}
                            y2={25.032}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="i"
                            x1={15.884}
                            x2={15.884}
                            y1={66.185}
                            y2={25.015}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="j"
                            x1={3.547}
                            x2={3.547}
                            y1={66.18}
                            y2={25.032}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case ICON_TYPES.logoHeaderText:
            return (
                <svg
                    {...props}
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    fill="none"
                >
                    <mask
                        id="a"
                        width={71}
                        height={70}
                        x={0}
                        y={25}
                        maskUnits="userSpaceOnUse"
                        style={{
                            maskType: "luminance",
                        }}
                    >
                        <path fill="#fff" d="M70.5 25H.5v70h70V25Z" />
                    </mask>
                    <g mask="url(#a)">
                        <path
                            fill="url(#b)"
                            d="M57.678 44.734a5.68 5.68 0 0 0 4.208-5.46v-.015a5.645 5.645 0 0 0-5.645-5.645h-.015a5.678 5.678 0 0 0-5.46 4.208 15.837 15.837 0 0 1-30.531 0 5.678 5.678 0 0 0-5.46-4.208h-.015a5.645 5.645 0 0 0-5.646 5.646v.015a5.678 5.678 0 0 0 4.209 5.46 15.836 15.836 0 0 1 0 30.531 5.678 5.678 0 0 0-4.208 5.46v.014a5.646 5.646 0 0 0 5.645 5.646h.015a5.678 5.678 0 0 0 5.46-4.209 15.837 15.837 0 0 1 30.531 0 5.68 5.68 0 0 0 5.46 4.209h.015a5.646 5.646 0 0 0 5.645-5.645v-.016a5.678 5.678 0 0 0-4.208-5.46 15.836 15.836 0 0 1 0-30.531Z"
                        />
                        <path
                            fill="url(#c)"
                            d="M7.885 28.342a1.233 1.233 0 0 0 1.41.233 11.268 11.268 0 0 1 12.839 2.15 1.252 1.252 0 0 0 1.736.04 1.229 1.229 0 0 0 .02-1.757 13.729 13.729 0 0 0-15.686-2.634 1.225 1.225 0 0 0-.32 1.968Z"
                        />
                        <path
                            fill="url(#d)"
                            d="M1.878 32.695A13.73 13.73 0 0 0 4.466 48.35a1.262 1.262 0 0 0 1.65.154 1.228 1.228 0 0 0 .129-1.85 11.27 11.27 0 0 1-2.167-12.866 1.233 1.233 0 0 0-.723-1.715 1.227 1.227 0 0 0-1.477.622Z"
                        />
                        <path
                            fill="url(#e)"
                            d="M61.707 91.426a11.267 11.267 0 0 1-12.842-2.153 1.25 1.25 0 0 0-1.731-.04 1.226 1.226 0 0 0-.023 1.76 13.731 13.731 0 0 0 15.686 2.634 1.228 1.228 0 0 0 .621-1.477 1.225 1.225 0 0 0-.97-.832 1.23 1.23 0 0 0-.741.108Z"
                        />
                        <path
                            fill="url(#f)"
                            d="M64.733 71.633a1.248 1.248 0 0 0 .04 1.731 11.267 11.267 0 0 1 2.148 12.851 1.234 1.234 0 0 0 .723 1.713 1.225 1.225 0 0 0 1.477-.62 13.727 13.727 0 0 0-2.626-15.698 1.228 1.228 0 0 0-1.762.023Z"
                        />
                        <path
                            fill="url(#g)"
                            d="M66.923 33.79a11.268 11.268 0 0 1-2.15 12.847 1.25 1.25 0 0 0-.04 1.73 1.228 1.228 0 0 0 1.76.024 13.729 13.729 0 0 0 2.63-15.693 1.226 1.226 0 0 0-2.31.35c-.04.252-.002.512.11.742Z"
                        />
                        <path
                            fill="url(#h)"
                            d="M48.864 30.728a11.268 11.268 0 0 1 12.847-2.15 1.232 1.232 0 0 0 1.757-1.299 1.223 1.223 0 0 0-.665-.902 13.73 13.73 0 0 0-15.693 2.63 1.229 1.229 0 0 0 .023 1.76 1.25 1.25 0 0 0 1.73-.039Z"
                        />
                        <path
                            fill="url(#i)"
                            d="M22.137 89.272a11.27 11.27 0 0 1-12.847 2.15 1.235 1.235 0 0 0-1.41.234 1.226 1.226 0 0 0 .318 1.968 13.728 13.728 0 0 0 15.693-2.631 1.228 1.228 0 0 0-.024-1.76 1.25 1.25 0 0 0-1.73.04Z"
                        />
                        <path
                            fill="url(#j)"
                            d="M4.077 86.211a11.268 11.268 0 0 1 2.15-12.847 1.25 1.25 0 0 0 .04-1.73 1.228 1.228 0 0 0-1.76-.024 13.73 13.73 0 0 0-2.63 15.693 1.226 1.226 0 0 0 2.31-.35 1.233 1.233 0 0 0-.11-.742Z"
                        />
                    </g>
                    <path
                        fill="url(#k)"
                        d="M112.106 43.344c0 1.536-.584 2.736-1.752 3.6-1.168.864-3 1.296-5.496 1.296-2.944 0-5.08-.568-6.408-1.704-1.312-1.152-1.968-2.84-1.968-5.064h3.84c0 1.28.344 2.168 1.032 2.664.704.496 1.912.744 3.624.744 2.192 0 3.288-.496 3.288-1.488 0-.352-.192-.672-.576-.96a4.465 4.465 0 0 0-1.224-.696 36.234 36.234 0 0 0-2.016-.72 3.377 3.377 0 0 0-.24-.072 3.377 3.377 0 0 1-.24-.072l-.24-.096c-.8-.272-1.384-.472-1.752-.6-.368-.144-.864-.344-1.488-.6-.624-.272-1.088-.52-1.392-.744-.288-.24-.6-.536-.936-.888a3.121 3.121 0 0 1-.72-1.176 5.152 5.152 0 0 1-.192-1.464c0-1.44.56-2.544 1.68-3.312 1.136-.768 2.792-1.152 4.968-1.152 2.48 0 4.352.56 5.616 1.68 1.264 1.104 1.896 2.544 1.896 4.32h-3.84c0-1.76-1.224-2.64-3.672-2.64-1.872 0-2.808.416-2.808 1.248 0 .384.184.696.552.936.368.24 1.224.584 2.568 1.032 2.24.768 3.744 1.336 4.512 1.704 2.256 1.136 3.384 2.544 3.384 4.224Zm23.26-12.264-10.2 8.472 10.2 8.448h-5.616l-7.08-5.976V48h-3.84V31.08h3.84v6l7.08-6h5.616Zm17.755 3.36h-3.84v10.2h3.84V48h-11.52v-3.36h3.84v-10.2h-3.84v-3.36h11.52v3.36Zm9.037 13.8c-.656.016-1.168-.152-1.536-.504-.352-.352-.528-.856-.528-1.512V31.08h3.84v13.8l8.232-.24V48l-10.008.24Zm18.792 0c-.656.016-1.168-.152-1.536-.504-.352-.352-.528-.856-.528-1.512V31.08h3.84v13.8l8.232-.24V48l-10.008.24ZM97.973 79.344c0 1.536-.584 2.736-1.752 3.6-1.168.864-3 1.296-5.496 1.296-2.944 0-5.08-.568-6.408-1.704-1.312-1.152-1.968-2.84-1.968-5.064h3.84c0 1.28.344 2.168 1.032 2.664.704.496 1.912.744 3.624.744 2.192 0 3.288-.496 3.288-1.488 0-.352-.192-.672-.576-.96a4.465 4.465 0 0 0-1.224-.696 36.234 36.234 0 0 0-2.016-.72 3.377 3.377 0 0 0-.24-.072 3.377 3.377 0 0 1-.24-.072l-.24-.096c-.8-.272-1.384-.472-1.752-.6-.368-.144-.864-.344-1.488-.6-.624-.272-1.088-.52-1.392-.744-.288-.24-.6-.536-.936-.888a3.121 3.121 0 0 1-.72-1.176 5.152 5.152 0 0 1-.192-1.464c0-1.44.56-2.544 1.68-3.312 1.136-.768 2.792-1.152 4.968-1.152 2.48 0 4.352.56 5.616 1.68 1.264 1.104 1.896 2.544 1.896 4.32h-3.84c0-1.76-1.224-2.64-3.672-2.64-1.872 0-2.808.416-2.808 1.248 0 .384.184.696.552.936.368.24 1.224.584 2.568 1.032 2.24.768 3.744 1.336 4.512 1.704 2.256 1.136 3.384 2.544 3.384 4.224Zm19.455-12.264v3.36h-5.52V84h-3.84V70.44h-5.544v-3.36h14.904ZM123.911 84V67.08h6.552c5.024 0 7.536 1.576 7.536 4.728 0 2.192-1.432 3.456-4.296 3.792v.96h2.472c1.36 0 2.04.68 2.04 2.04V84h-3.84v-5.952h-6.624V84h-3.84Zm3.84-9.312h3.984c.272-.016.6-.056.984-.12.384-.08.656-.192.816-.336.16-.144.304-.352.432-.624s.192-.616.192-1.032c0-.416-.064-.76-.192-1.032-.128-.288-.272-.504-.432-.648-.16-.144-.432-.248-.816-.312a4.945 4.945 0 0 0-.984-.12c-.256-.016-.68-.024-1.272-.024h-2.712v4.248ZM145.422 84V67.08h12.072v3.36h-8.232v3.408h7.032v3.36h-7.032v3.432h8.232V84h-12.072Zm32.101 0-1.536-5.424h-6.864L167.611 84h-3.888l4.872-16.92h7.92L181.411 84h-3.888Zm-7.464-8.784h4.992l-2.016-7.176h-.96l-2.016 7.176ZM187.905 84V67.08h7.56l2.472 15.96h.96l2.472-15.96h7.56V84h-3.84V70.44l.72-2.4h-.96L202.137 84h-7.44l-2.712-15.96h-.96l.72 2.4V84h-3.84Z"
                    />
                    <defs>
                        <linearGradient
                            id="b"
                            x1={35.5}
                            x2={35.5}
                            y1={91.188}
                            y2={50.026}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="c"
                            x1={15.887}
                            x2={15.887}
                            y1={91.205}
                            y2={50.032}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="d"
                            x1={3.551}
                            x2={3.551}
                            y1={91.182}
                            y2={50.03}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="e"
                            x1={55.114}
                            x2={55.114}
                            y1={91.185}
                            y2={50.018}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="f"
                            x1={67.453}
                            x2={67.453}
                            y1={91.186}
                            y2={50.025}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="g"
                            x1={67.453}
                            x2={67.453}
                            y1={91.186}
                            y2={50.023}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="h"
                            x1={55.117}
                            x2={55.117}
                            y1={91.207}
                            y2={50.032}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="i"
                            x1={15.884}
                            x2={15.884}
                            y1={91.185}
                            y2={50.015}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="j"
                            x1={3.547}
                            x2={3.547}
                            y1={91.18}
                            y2={50.032}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="k"
                            x1={90.01}
                            x2={214.252}
                            y1={-70.435}
                            y2={-66.927}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.231} stopColor="#0D5D74" />
                            <stop offset={1} stopColor="#061F3E" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case ICON_TYPES.logoFooter:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    fill="none"
                    {...props}
                >
                    <mask
                        id="a"
                        width={70}
                        height={70}
                        x={16}
                        y={0}
                        maskUnits="userSpaceOnUse"
                        style={{
                            maskType: "luminance",
                        }}
                    >
                        <path fill="#fff" d="M86 0H16v70h70V0Z" />
                    </mask>
                    <g mask="url(#a)">
                        <path
                            fill="url(#b)"
                            d="M73.177 19.734a5.68 5.68 0 0 0 4.209-5.46v-.015a5.645 5.645 0 0 0-5.645-5.646h-.015a5.678 5.678 0 0 0-5.46 4.209 15.837 15.837 0 0 1-30.531 0 5.678 5.678 0 0 0-5.46-4.208h-.015a5.645 5.645 0 0 0-5.646 5.646v.015a5.678 5.678 0 0 0 4.209 5.46 15.837 15.837 0 0 1 0 30.531 5.679 5.679 0 0 0-4.208 5.46v.014a5.646 5.646 0 0 0 5.645 5.645h.015a5.678 5.678 0 0 0 5.46-4.208 15.837 15.837 0 0 1 30.531 0 5.678 5.678 0 0 0 5.46 4.209h.015a5.646 5.646 0 0 0 5.645-5.646v-.015a5.677 5.677 0 0 0-4.208-5.46 15.836 15.836 0 0 1 0-30.531Z"
                        />
                        <path
                            fill="url(#c)"
                            d="M23.385 3.342a1.232 1.232 0 0 0 1.41.233 11.269 11.269 0 0 1 12.839 2.15 1.252 1.252 0 0 0 1.736.04 1.23 1.23 0 0 0 .02-1.757 13.73 13.73 0 0 0-15.686-2.634 1.226 1.226 0 0 0-.32 1.968Z"
                        />
                        <path
                            fill="url(#d)"
                            d="M17.378 7.695a13.73 13.73 0 0 0 2.588 15.655 1.262 1.262 0 0 0 1.65.154 1.227 1.227 0 0 0 .129-1.85 11.27 11.27 0 0 1-2.167-12.866 1.233 1.233 0 0 0-1.298-1.76 1.226 1.226 0 0 0-.902.667Z"
                        />
                        <path
                            fill="url(#e)"
                            d="M77.207 66.426a11.268 11.268 0 0 1-12.842-2.153 1.25 1.25 0 0 0-1.731-.04 1.228 1.228 0 0 0-.023 1.76 13.73 13.73 0 0 0 15.686 2.634 1.23 1.23 0 0 0 .621-1.477 1.224 1.224 0 0 0-.97-.833 1.23 1.23 0 0 0-.741.109Z"
                        />
                        <path
                            fill="url(#f)"
                            d="M80.233 46.633a1.248 1.248 0 0 0 .04 1.731 11.267 11.267 0 0 1 2.148 12.851 1.234 1.234 0 0 0 .723 1.713 1.225 1.225 0 0 0 1.477-.62 13.727 13.727 0 0 0-2.626-15.698 1.228 1.228 0 0 0-1.762.023Z"
                        />
                        <path
                            fill="url(#g)"
                            d="M82.423 8.79a11.268 11.268 0 0 1-2.15 12.847 1.25 1.25 0 0 0-.04 1.73 1.226 1.226 0 0 0 1.76.024 13.728 13.728 0 0 0 2.63-15.693 1.226 1.226 0 0 0-2.31.35c-.04.252-.002.512.11.742Z"
                        />
                        <path
                            fill="url(#h)"
                            d="M64.364 5.728a11.268 11.268 0 0 1 12.847-2.15 1.232 1.232 0 0 0 1.757-1.299 1.224 1.224 0 0 0-.665-.902 13.729 13.729 0 0 0-15.693 2.63 1.229 1.229 0 0 0 .023 1.76 1.25 1.25 0 0 0 1.73-.039Z"
                        />
                        <path
                            fill="url(#i)"
                            d="M37.637 64.272a11.27 11.27 0 0 1-12.847 2.15 1.236 1.236 0 0 0-1.41.234 1.225 1.225 0 0 0 .318 1.968 13.729 13.729 0 0 0 15.693-2.631 1.228 1.228 0 0 0-.024-1.76 1.25 1.25 0 0 0-1.73.04Z"
                        />
                        <path
                            fill="url(#j)"
                            d="M19.577 61.211a11.268 11.268 0 0 1 2.15-12.847 1.25 1.25 0 0 0 .04-1.73 1.228 1.228 0 0 0-1.76-.024 13.73 13.73 0 0 0-2.63 15.693 1.226 1.226 0 0 0 2.31-.35 1.233 1.233 0 0 0-.11-.742Z"
                        />
                    </g>
                    <path
                        fill="url(#k)"
                        d="M127.606 23.344c0 1.536-.584 2.736-1.752 3.6-1.168.864-3 1.296-5.496 1.296-2.944 0-5.08-.568-6.408-1.704-1.312-1.152-1.968-2.84-1.968-5.064h3.84c0 1.28.344 2.168 1.032 2.664.704.496 1.912.744 3.624.744 2.192 0 3.288-.496 3.288-1.488 0-.352-.192-.672-.576-.96a4.465 4.465 0 0 0-1.224-.696 36.234 36.234 0 0 0-2.016-.72 3.377 3.377 0 0 0-.24-.072 3.377 3.377 0 0 1-.24-.072l-.24-.096c-.8-.272-1.384-.472-1.752-.6-.368-.144-.864-.344-1.488-.6-.624-.272-1.088-.52-1.392-.744-.288-.24-.6-.536-.936-.888a3.121 3.121 0 0 1-.72-1.176 5.152 5.152 0 0 1-.192-1.464c0-1.44.56-2.544 1.68-3.312 1.136-.768 2.792-1.152 4.968-1.152 2.48 0 4.352.56 5.616 1.68 1.264 1.104 1.896 2.544 1.896 4.32h-3.84c0-1.76-1.224-2.64-3.672-2.64-1.872 0-2.808.416-2.808 1.248 0 .384.184.696.552.936.368.24 1.224.584 2.568 1.032 2.24.768 3.744 1.336 4.512 1.704 2.256 1.136 3.384 2.544 3.384 4.224Zm23.26-12.264-10.2 8.472 10.2 8.448h-5.616l-7.08-5.976V28h-3.84V11.08h3.84v6l7.08-6h5.616Zm17.755 3.36h-3.84v10.2h3.84V28h-11.52v-3.36h3.84v-10.2h-3.84v-3.36h11.52v3.36Zm9.037 13.8c-.656.016-1.168-.152-1.536-.504-.352-.352-.528-.856-.528-1.512V11.08h3.84v13.8l8.232-.24V28l-10.008.24Zm18.792 0c-.656.016-1.168-.152-1.536-.504-.352-.352-.528-.856-.528-1.512V11.08h3.84v13.8l8.232-.24V28l-10.008.24Zm-82.977 16.104c0 1.536-.584 2.736-1.752 3.6-1.168.864-3 1.296-5.496 1.296-2.944 0-5.08-.568-6.408-1.704-1.312-1.152-1.968-2.84-1.968-5.064h3.84c0 1.28.344 2.168 1.032 2.664.704.496 1.912.744 3.624.744 2.192 0 3.288-.496 3.288-1.488 0-.352-.192-.672-.576-.96a4.465 4.465 0 0 0-1.224-.696 36.234 36.234 0 0 0-2.016-.72 3.377 3.377 0 0 0-.24-.072 3.377 3.377 0 0 1-.24-.072l-.24-.096c-.8-.272-1.384-.472-1.752-.6-.368-.144-.864-.344-1.488-.6-.624-.272-1.088-.52-1.392-.744-.288-.24-.6-.536-.936-.888a3.121 3.121 0 0 1-.72-1.176 5.152 5.152 0 0 1-.192-1.464c0-1.44.56-2.544 1.68-3.312 1.136-.768 2.792-1.152 4.968-1.152 2.48 0 4.352.56 5.616 1.68 1.264 1.104 1.896 2.544 1.896 4.32h-3.84c0-1.76-1.224-2.64-3.672-2.64-1.872 0-2.808.416-2.808 1.248 0 .384.184.696.552.936.368.24 1.224.584 2.568 1.032 2.24.768 3.744 1.336 4.512 1.704 2.256 1.136 3.384 2.544 3.384 4.224Zm19.455-12.264v3.36h-5.52V49h-3.84V35.44h-5.544v-3.36h14.904ZM139.411 49V32.08h6.552c5.024 0 7.536 1.576 7.536 4.728 0 2.192-1.432 3.456-4.296 3.792v.96h2.472c1.36 0 2.04.68 2.04 2.04V49h-3.84v-5.952h-6.624V49h-3.84Zm3.84-9.312h3.984c.272-.016.6-.056.984-.12.384-.08.656-.192.816-.336.16-.144.304-.352.432-.624s.192-.616.192-1.032c0-.416-.064-.76-.192-1.032-.128-.288-.272-.504-.432-.648-.16-.144-.432-.248-.816-.312a4.945 4.945 0 0 0-.984-.12c-.256-.016-.68-.024-1.272-.024h-2.712v4.248ZM160.922 49V32.08h12.072v3.36h-8.232v3.408h7.032v3.36h-7.032v3.432h8.232V49h-12.072Zm32.101 0-1.536-5.424h-6.864L183.111 49h-3.888l4.872-16.92h7.92L196.911 49h-3.888Zm-7.464-8.784h4.992l-2.016-7.176h-.96l-2.016 7.176ZM203.405 49V32.08h7.56l2.472 15.96h.96l2.472-15.96h7.56V49h-3.84V35.44l.72-2.4h-.96L217.637 49h-7.44l-2.712-15.96h-.96l.72 2.4V49h-3.84Z"
                    />
                    <defs>
                        <linearGradient
                            id="b"
                            x1={51}
                            x2={51}
                            y1={66.188}
                            y2={25.026}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="c"
                            x1={31.387}
                            x2={31.387}
                            y1={66.205}
                            y2={25.032}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="d"
                            x1={19.051}
                            x2={19.051}
                            y1={66.182}
                            y2={25.03}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="e"
                            x1={70.615}
                            x2={70.615}
                            y1={66.185}
                            y2={25.018}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="f"
                            x1={82.953}
                            x2={82.953}
                            y1={66.186}
                            y2={25.025}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="g"
                            x1={82.953}
                            x2={82.953}
                            y1={66.186}
                            y2={25.023}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="h"
                            x1={70.617}
                            x2={70.617}
                            y1={66.207}
                            y2={25.031}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="i"
                            x1={31.384}
                            x2={31.384}
                            y1={66.185}
                            y2={25.015}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="j"
                            x1={19.047}
                            x2={19.047}
                            y1={66.18}
                            y2={25.032}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.005} stopColor="#3F51DC" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                        <linearGradient
                            id="k"
                            x1={44.5}
                            x2={150.044}
                            y1={-16.042}
                            y2={-71.542}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0.231} stopColor="#EFCC13" />
                            <stop offset={1} stopColor="#2AC3D1" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        default:
            return null;
    }
};

LogoIcon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.oneOf(Object.values(ICON_TYPES)).isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};