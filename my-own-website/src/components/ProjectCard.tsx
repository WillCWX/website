import { ProjectInfo } from '@/constants/projects'
import Image from 'next/image'

export default function ProjectCard({ projectInfo }: Prop) {
    return (
        <div className="select-none max-w-sm">
            <div className="max-w-sm cursor-pointer z-10 w-full max-w-5xl items-center justify-between font-mono">
                <div
                    className="cursor-pointer bg-gradient-to-b backdrop-blur-2xl 
                            dark:border-neutral-800 dark:from-inherit 
                            lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 
                            lg:p-4 lg:dark:bg-zinc-800/30 grid grid-cols-1 justify-items-center gap-y-4"
                >
                    <Image src={projectInfo.img} alt="Markbind Logo" />
                    <p className="text-3xl">{projectInfo.name}</p>
                    <p>{projectInfo.desc}</p>
                </div>
            </div>
        </div>
    )
}

type Prop = {
    projectInfo: ProjectInfo
    key: string
}
