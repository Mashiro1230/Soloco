import Link from "next/link";
import { ButtonProps } from "@/types/types";

export const PinkButton: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    disabled = false,
    className = "",
    href,
}) => {
    const buttonClasses = `py-2 px-4 border border-transparent rounded-md shadow-sm text-base text-center font-medium text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClasses} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${className}`}
        >
            {children}
        </button>
    );
};
