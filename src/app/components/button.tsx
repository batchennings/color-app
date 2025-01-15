"use client";
import { cva, type VariantProps } from "class-variance-authority";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

con

const button = cva("button transition rounded-md", {
    variants: {
        intent: {
            primary: ["bg-blue-600", "text-white", "border-transparent"],
            secondary: ["bg-white", "text-gray-800", "border-gray-400"],
        },
        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
        },
        disabled: {
            false: null,
            true: ["opacity-50", "cursor-not-allowed"],
        },
    },
    compoundVariants: [
        {
            intent: "primary",
            disabled: false,
            class: "hover:bg-blue-700",
        },
        {
            intent: "secondary",
            disabled: false,
            class: "hover:bg-gray-100",
        },
        { intent: "primary", size: "medium"},
    ],
    defaultVariants: {
        disabled: false,
        intent: "primary",
        size: "medium",
    },
});

export default function Button({ children, className, intent, size, disabled, ...rest }: Props) {
    return (
        <button {...rest} className={button({ intent, size, disabled, className })}>
            {children}
        </button>
    );
}
