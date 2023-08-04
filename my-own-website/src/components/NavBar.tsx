export default function NavBar() {
    const pages: string[][] = [
        ['Home', '/'],
        ['About', '/team'],
        ['Projects', '/projects'],
        ['Blogs', '/reports'],
    ]

    return (
        <nav className="flex md:justify-center space-x-4">
            {pages.map(([title, url]) => (
                <a
                    href={url}
                    key={title}
                    className="rounded-lg px-3 py-2 text-2xl font-medium hover:bg-slate-100 hover:text-slate-900"
                >
                    {title}
                </a>
            ))}
        </nav>
    )
}
