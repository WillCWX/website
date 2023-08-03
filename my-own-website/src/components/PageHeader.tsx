import NavBar from './NavBar'

export default function PageHeader({ onClick, children }: Prop) {
    return (
        <div className="min-w-full select-none">
            <div
                className="cursor-pointer z-10 w-full min-w-full max-w-5xl items-center justify-between font-mono"
                onClick={onClick}
            >
                <div
                    className="cursor-pointer fixed left-0 top-0 
                            flex w-full bg-gradient-to-b backdrop-blur-2xl 
                            dark:border-neutral-800 dark:from-inherit 
                            lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 
                            lg:p-4 lg:dark:bg-zinc-800/30 grid grid-cols-1 justify-items-center gap-y-1"
                >
                    {children}
                </div>
            </div>
            <NavBar />
        </div>
    )
}

type Prop = {
    onClick?: React.MouseEventHandler
    children: React.ReactNode
}
