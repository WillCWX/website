import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <PageHeader>
                <p className="text-5xl">WillCWX Projects</p>
                <p>Undergraduate @ NUS</p>
                <p>Some of the projects that I&apos;ve worked on</p>
            </PageHeader>
            <Footer />
        </main>
    )
}
