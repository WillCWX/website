import { StaticImageData } from 'next/image'
import markbindLogo from '../../public/markbind-darkbackground.png'
import kakilangLogo from '../../public/kakilang-Logo.png'

type ProjectInfo = {
    name: string
    desc: string
    img: StaticImageData
}

const MARKBIND_INFO: ProjectInfo = {
    name: 'Markbind',
    desc: `Generate more dynamic websites from Markdown text.
     Optimized for creating text-heavy websites e.g., eLearning websites, 
     online instruction manuals, project documentation etc.`,
    img: markbindLogo,
}

const KAKILANG_INFO: ProjectInfo = {
    name: 'Kakilang!',
    desc: `Organise meetups, share events and gathering with your NUS hallmates and your friends.
        Kakilang provides you the scheduling and communication tools
        to make your hall stay so much more fun!`,
    img: kakilangLogo,
}

const ALL: ProjectInfo[] = [MARKBIND_INFO, KAKILANG_INFO]

export type { ProjectInfo }
export { ALL, MARKBIND_INFO, KAKILANG_INFO }
