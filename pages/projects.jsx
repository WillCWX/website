import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";


export default function projects() {
    return (
        <>
            <PageTitle title="My Projects" />
            <Layout>
                <NavBar />
                <main>
                    These are some of the projects that I have done.
                </main>
            </Layout>
        </>
    );
}
