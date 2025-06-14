"use client"

import Link from "next/link"

export default function Footer() {
    const trackFooterClick = (link: string) => {
        if (typeof window !== "undefined" && window.plausible) {
            window.plausible("Footer Click", {
                props: { link: link },
            })
        }
    }

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">SaaS Plausible Demo</h3>
                        <p className="text-gray-400 mb-4">
                            Complete Next.js 14 application with Plausible Analytics integration for tracking user behavior and
                            business intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/features"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={() => trackFooterClick("Features")}
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={() => trackFooterClick("Pricing")}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={() => trackFooterClick("Documentation")}
                                >
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={() => trackFooterClick("About")}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={() => trackFooterClick("Contact")}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={() => trackFooterClick("Privacy")}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 SaaS Plausible Demo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
