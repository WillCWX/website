'use client'

import { useState } from 'react'

import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { ALL } from '@/constants/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
    const SHORT_NAME = 'WillCWX'
    const LONG_NAME = 'William Chau Wei Xuan'

    const [name, setName] = useState(SHORT_NAME)

    const changeName = () => {
        if (name == SHORT_NAME) {
            setName(LONG_NAME)
        } else {
            setName(SHORT_NAME)
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <PageHeader onClick={changeName}>
                <p className="text-7xl">{name}</p>
                <p>Undergraduate @ NUS</p>
                <p>Welcome to my Website!</p>
            </PageHeader>

            <div className="min-w-full">
                <p className="text-5xl text-center py-10 align-text-top">
                    {' '}
                    My Projects
                </p>
                <div className="flex md:justify-center space-x-4">
                    {ALL.map((info) => (
                        <ProjectCard key={info.name} projectInfo={info} />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}
