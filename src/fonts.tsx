import { Global } from "@emotion/react";

const Fonts = () => (
    <Global 
        styles={`
            /* latin */
            @font-face {
                font-family: 'Roboto';
                font-style: light;
                font-weight: 300;
                font-display: swap;
                src: url('../public/Roboto/Roboto-Light.ttf') format('ttf');
            }
        `}
    />
)

export default Fonts;
