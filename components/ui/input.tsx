"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle2, Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

const inputVariants = cva(
    "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border-input",
                error: "border-red-500 focus-visible:ring-red-500",
                success: "border-green-500 focus-visible:ring-green-500",
                warning: "border-orange-500 focus-visible:ring-orange-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
)

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    label?: string
    error?: string
    success?: string
    warning?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    showPasswordToggle?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { className, variant, type, label, error, success, warning, leftIcon, rightIcon, showPasswordToggle, id, ...props },
        ref,
    ) => {
        const inputId = React.useId()
        const [showPassword, setShowPassword] = React.useState(false)
        const [currentVariant, setCurrentVariant] = React.useState(variant)

        // Determine variant based on validation state
        React.useEffect(() => {
            if (error) setCurrentVariant("error")
            else if (success) setCurrentVariant("success")
            else if (warning) setCurrentVariant("warning")
            else setCurrentVariant("default")
        }, [error, success, warning])

        const inputType = showPasswordToggle && type === "password" ? (showPassword ? "text" : "password") : type

        const ValidationIcon = error ? AlertCircle : success ? CheckCircle2 : warning ? AlertCircle : null

        const validationIconColor = error ? "text-red-500" : success ? "text-green-500" : warning ? "text-orange-500" : ""

        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    {leftIcon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{leftIcon}</div>}
                    <input
                        type={inputType}
                        className={cn(
                            inputVariants({ variant: currentVariant }),
                            leftIcon && "pl-10",
                            (rightIcon || ValidationIcon || showPasswordToggle) && "pr-10",
                            className,
                        )}
                        ref={ref}
                        id={id || inputId}
                        {...props}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                        {ValidationIcon && <ValidationIcon className={cn("h-4 w-4", validationIconColor)} />}
                        {showPasswordToggle && type === "password" && (
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        )}
                        {rightIcon && !ValidationIcon && !showPasswordToggle && rightIcon}
                    </div>
                </div>
                {(error || success || warning) && (
                    <p
                        className={cn(
                            "text-sm",
                            error && "text-red-500",
                            success && "text-green-500",
                            warning && "text-orange-500",
                        )}
                    >
                        {error || success || warning}
                    </p>
                )}
            </div>
        )
    },
)
Input.displayName = "Input"

export { Input, inputVariants }
