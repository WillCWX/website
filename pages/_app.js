// pages/_app.js
import "../css/colors.css";
import "../css/boxes.css";
import "../css/font.css";

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
