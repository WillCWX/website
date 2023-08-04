import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <PageHeader>
                <p className="text-5xl">Markbind</p>
                <p>Open Source @ NUS</p>
                <p>The first open source that I worked on</p>
            </PageHeader>
            <Footer />
        </main>
    )
}
