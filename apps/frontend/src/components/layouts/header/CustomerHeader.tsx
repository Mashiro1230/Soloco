import Image from "next/image";
import Link from "next/link";
import { CustomerNavigationMenu } from "./CustomerNavitaion";
import { getImageUrl } from "@/utils/image";

// S3から画像取得
const Logo = getImageUrl("soloco_logo.png");
const CustomerLogoutIconImage = getImageUrl("icon_customer_logout.png");
const CustomerLoginIconImage = getImageUrl("icon_customer_login.png");

export const CustomerHeader = () => {
    return (
        <header className="relative">
            <div className="mx-auto">
                <div className="flex items-center justify-between px-5 lg:px-10 py-2 h-20 lg:h-24">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className="text-lg lg:text-xl font-bold">
                                <Image
                                    src={Logo}
                                    width={120}
                                    height={40}
                                    alt="Logo"
                                    className="w-[120px] lg:w-[150px]"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center h-full text-base lg:text-lg">
                        <CustomerNavigationMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};
