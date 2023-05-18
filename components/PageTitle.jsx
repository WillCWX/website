import Head from "next/head";
import Proptype from "prop-types";

export default function PageTitle({ title }) {
    return (<Head><title>{title}</title></Head>);
}

PageTitle.propTypes = {
    title: Proptype.string.isRequired
};
