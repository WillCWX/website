'use client'

import { useState } from 'react'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'

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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <PageHeader onClick={changeName}>
                <p className="text-5xl">{name}</p>
                <p>Undergraduate @ NUS</p>
                <p>Welcome to my Website!</p>
            </PageHeader>
            <Footer />
        </main>
    )
}
