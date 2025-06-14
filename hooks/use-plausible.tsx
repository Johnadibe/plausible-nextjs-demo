"use client"

import { useCallback } from "react"

export function usePlausible() {
    const trackEvent = useCallback((eventName: string, props?: Record<string, any>) => {
        if (typeof window !== "undefined" && window.plausible) {
            window.plausible(eventName, { props })
        }
    }, [])

    const trackPageView = useCallback((url?: string) => {
        if (typeof window !== "undefined" && window.plausible) {
            window.plausible("pageview", { props: { url: url || window.location.href } })
        }
    }, [])

    return {
        trackEvent,
        trackPageView,
    }
}
