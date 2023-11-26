'use client'

import { useState, useEffect } from 'react'

import Login from '../ui/login'
import Logout from '../ui/logout'

export default function login() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
        let token: any = sessionStorage.getItem("token");
        setData(token)
    }, []);

    if (isLoading) return (<p>Loading...</p>)
    if (!data) {
        return (
            <div className="overflow-hidden flex min-h-screen max-sm:flex-col items-center justify-center bg-desktop-background max-sm:bg-mobile-background bg-cover bg-center">
                <Login />
            </div>
        )
    } else {
        return (
            <div className="overflow-hidden flex min-h-screen max-sm:flex-col items-center justify-center bg-desktop-background max-sm:bg-mobile-background bg-cover bg-center">
                <Logout />
            </div>
        )
    }
}