import PageTitle from "../components/PageTitle";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

function HomeBanner() {
    return (
        <header>
            Hi! I&apos;m William
        </header>
    );
}

export default function HomePage() {

    return (
        <>
            <PageTitle title="About: William" />
            <Layout>
                <HomeBanner />
                <NavBar />
            </Layout>
        </>
    );
}
