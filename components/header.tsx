"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const trackNavClick = (page: string) => {
        if (typeof window !== "undefined" && window.plausible) {
            window.plausible("Navigation Click", {
                props: { page: page },
            })
        }
    }

    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            SaaS Plausible Demo
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => trackNavClick("Home")}
                        >
                            Home
                        </Link>
                        <Link
                            href="/features"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => trackNavClick("Features")}
                        >
                            Features
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => trackNavClick("Pricing")}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => trackNavClick("Contact")}
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login">
                            <Button variant="outline">Login</Button>
                        </Link>
                        <Link href="/signup">
                            <Button>Sign Up</Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => {
                                    trackNavClick("Home Mobile")
                                    setIsMenuOpen(false)
                                }}
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => {
                                    trackNavClick("Features Mobile")
                                    setIsMenuOpen(false)
                                }}
                            >
                                Features
                            </Link>
                            <Link
                                href="/pricing"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => {
                                    trackNavClick("Pricing Mobile")
                                    setIsMenuOpen(false)
                                }}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => {
                                    trackNavClick("Contact Mobile")
                                    setIsMenuOpen(false)
                                }}
                            >
                                Contact
                            </Link>
                            <div className="flex flex-col space-y-2 px-3 py-2">
                                <Link href="/login">
                                    <Button variant="outline" className="w-full">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button className="w-full">Sign Up</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
