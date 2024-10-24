import Link from "next/link";
import { CUSTOMER_NAVIGATION_LINKS } from "@/utils/constants";

export const CustomerNavigationMenu = () => (
    <nav className="h-full flex items-center">
        <ul className="flex justify-center h-full">
            {CUSTOMER_NAVIGATION_LINKS.map(({ href, label }) => (
                <li key={href} className="flex items-center px-5">
                    <Link href={href}>
                        <p className="no-underline font-semibold hover:text-pink-500 transition-all text-lg">
                            {label}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);
