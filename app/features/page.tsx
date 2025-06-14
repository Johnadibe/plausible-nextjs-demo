"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    BarChart3,
    Shield,
    Zap,
    Users,
    Globe,
    Bell,
    Target,
    Smartphone,
    Lock,
    TrendingUp,
    Clock,
    Mail,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
    const trackFeatureClick = (feature: string) => {
        if (typeof window !== "undefined" && window.plausible) {
            window.plausible("Feature Interest", {
                props: {
                    feature: feature,
                    page: "Features",
                },
            })
        }
    }

    const features = [
        {
            icon: BarChart3,
            title: "Real-time Analytics",
            description:
                "Get instant insights into your website traffic with live visitor tracking and real-time data updates.",
            benefits: ["Live visitor count", "Real-time page views", "Instant bounce rate", "Live conversion tracking"],
        },
        {
            icon: Shield,
            title: "Privacy-First Approach",
            description: "GDPR, CCPA, and PECR compliant analytics without cookies or personal data collection.",
            benefits: ["No cookies required", "GDPR compliant", "No personal data stored", "Transparent data usage"],
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Ultra-lightweight script that loads in under 1KB and doesn't slow down your website.",
            benefits: ["< 1KB script size", "No impact on page speed", "CDN-powered delivery", "Optimized performance"],
        },
        {
            icon: Target,
            title: "Goal Tracking",
            description: "Track conversions, form submissions, and custom events to measure what matters most.",
            benefits: ["Custom event tracking", "Conversion funnels", "Goal completion rates", "Revenue tracking"],
        },
        {
            icon: Globe,
            title: "Global Insights",
            description: "Understand your audience with detailed geographic and demographic data.",
            benefits: ["Country-level data", "City-level insights", "Language preferences", "Device information"],
        },
        {
            icon: Bell,
            title: "Smart Notifications",
            description: "Get alerted about traffic spikes, goal completions, and important website events.",
            benefits: ["Email alerts", "Slack integration", "Custom thresholds", "Weekly reports"],
        },
        {
            icon: Smartphone,
            title: "Mobile Optimized",
            description: "Beautiful, responsive dashboard that works perfectly on all devices.",
            benefits: ["Mobile-first design", "Touch-friendly interface", "Offline capability", "Native app feel"],
        },
        {
            icon: Lock,
            title: "Data Ownership",
            description: "Your data stays yours. Export anytime, delete anytime, full control guaranteed.",
            benefits: ["Easy data export", "Complete data deletion", "No vendor lock-in", "Full transparency"],
        },
        {
            icon: TrendingUp,
            title: "Advanced Reporting",
            description: "Comprehensive reports with trends, comparisons, and actionable insights.",
            benefits: ["Custom date ranges", "Trend analysis", "Comparative reports", "Data visualization"],
        },
        {
            icon: Clock,
            title: "Historical Data",
            description: "Access unlimited historical data to understand long-term trends and patterns.",
            benefits: ["Unlimited data retention", "Historical comparisons", "Trend identification", "Long-term insights"],
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Share dashboards and insights with your team members and stakeholders.",
            benefits: ["Multiple user access", "Role-based permissions", "Shared dashboards", "Team reports"],
        },
        {
            icon: Mail,
            title: "Email Reports",
            description: "Automated weekly and monthly reports delivered straight to your inbox.",
            benefits: ["Scheduled reports", "Custom recipients", "PDF exports", "Executive summaries"],
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Powerful Features for Modern Analytics</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to understand your audience, optimize your website, and grow your business with
                        privacy-focused analytics.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center mb-4">
                                        <div className="p-2 bg-blue-100 rounded-lg mr-4">
                                            <IconComponent className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base">{feature.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {feature.benefits.map((benefit, benefitIndex) => (
                                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* CTA Section */}
                <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Start your free trial today and see how our analytics can transform your business
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100"
                                onClick={() => trackFeatureClick("Start Free Trial")}
                            >
                                Start Free Trial
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600"
                                onClick={() => trackFeatureClick("Schedule Demo")}
                            >
                                Schedule Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
