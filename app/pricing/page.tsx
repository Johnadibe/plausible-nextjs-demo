"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
    const trackPricingClick = (plan: string, action: string) => {
        if (typeof window !== "undefined" && window.plausible) {
            window.plausible("Pricing Click", {
                props: {
                    plan: plan,
                    action: action,
                    page: "Pricing",
                },
            })
        }
    }

    const plans = [
        {
            name: "Starter",
            price: "$9",
            period: "/month",
            description: "Perfect for small websites and blogs",
            features: [
                "Up to 10,000 page views",
                "Basic analytics dashboard",
                "Email support",
                "GDPR compliant",
                "1 website",
            ],
            popular: false,
        },
        {
            name: "Professional",
            price: "$19",
            period: "/month",
            description: "Great for growing businesses",
            features: [
                "Up to 100,000 page views",
                "Advanced analytics",
                "Custom events tracking",
                "Priority support",
                "Up to 5 websites",
                "Goal conversions",
                "Email reports",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "$49",
            period: "/month",
            description: "For large organizations",
            features: [
                "Unlimited page views",
                "Full analytics suite",
                "Custom integrations",
                "24/7 phone support",
                "Unlimited websites",
                "Advanced reporting",
                "Team collaboration",
                "White-label options",
            ],
            popular: false,
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-gray-600">Choose the plan that&apos;s right for your business</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`relative ${plan.popular ? "border-blue-500 border-2" : ""}`}>
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-600">{plan.period}</span>
                                </div>
                                <CardDescription className="mt-2">{plan.description}</CardDescription>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Check className="h-5 w-5 text-green-500 mr-3" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/signup" className="block">
                                    <Button
                                        className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                                        variant={plan.popular ? "default" : "outline"}
                                        onClick={() => trackPricingClick(plan.name, "Get Started")}
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Plan?</h2>
                    <p className="text-gray-600 mb-6">Contact our sales team for enterprise solutions and custom pricing</p>
                    <Link href="/contact">
                        <Button size="lg" onClick={() => trackPricingClick("Custom", "Contact Sales")}>
                            Contact Sales
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
