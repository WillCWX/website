import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1>Not Found</h1>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </main>
    )
}
