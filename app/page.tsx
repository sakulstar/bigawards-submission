'use client'

import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'

import Nominations from './ui/nominations'

export default function Home() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
        let token: any = sessionStorage.getItem("token");
        console.log(token)
        setData(token)
    }, []);


    if (isLoading) return <p>Loading...</p>
    if (!data) {
        redirect('/login')
    } else {
        return (
            <div className="overflow-hidden flex min-h-screen items-center justify-center bg-desktop-background max-sm:bg-mobile-background bg-cover bg-center">
                <Nominations />
            </div>
        )
    }
}