'use client'

import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function logout() {

    const [data, setData] = useState("Undefined")
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        let url = document.location.hash
        setData(url)
        setLoading(false)

        let splittedToken: any = url.split("&")
        splittedToken = splittedToken[0]
        splittedToken = splittedToken.split("=")
        splittedToken = splittedToken[1]

        sessionStorage.setItem("token", splittedToken);
    }, []);


    if (isLoading) return (<p>Loading...</p>)
    if (!data) return ( 
    <div className="overflow-hidden flex min-h-screen max-sm:flex-col items-center justify-center bg-desktop-background max-sm:bg-mobile-background bg-cover bg-center">
        <p className="text-gray-200">
            Failed to fetch data. &nbsp;
            <a href="/" className="text-dark-purple">
                Go back here.
            </a>
        </p>
    </div>
    )

    redirect('/')
}