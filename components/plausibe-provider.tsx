"use client"

import Script from "next/script"
import { useEffect } from "react"

const PLAUSIBLE_DOMAIN = "plausible.test"
const PLAUSIBLE_SRC = "https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"

declare global {
    interface Window {
        plausible: ((event: string, options?: { props?: Record<string, unknown> }) => void) & {
            q?: unknown[]
        }
    }
}

export default function PlausibleProvider() {
    useEffect(() => {
        // Initialize plausible function if it doesn't exist
        if (typeof window !== "undefined" && !window.plausible) {
            window.plausible =
                window.plausible ||
                function (...args: unknown[]) { (window.plausible.q = window.plausible.q || []).push(args) }
        }
    }, [])

    return (
        <>
            <Script
                defer
                data-domain={PLAUSIBLE_DOMAIN}
                src={PLAUSIBLE_SRC}
                strategy="afterInteractive"
            />
            <Script
                id="plausible-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
                }}
            />
        </>
    )
}