import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/utils/image";

// S3から画像取得
const Logo = getImageUrl("soloco_logo.png");

export const LandingPageHeader = () => (
    <header className="relative">
        <div className="mx-auto">
            <div className="flex items-center justify-between px-5 lg:px-10 py-2 h-20 lg:h-24">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <div className="text-lg lg:text-xl font-bold md:items-center">
                            <Image
                                src={Logo}
                                width={120}
                                height={35}
                                alt="Logo"
                                className="w-[120px] lg:w-[150px]" // モバイル時のサイズ
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </header>
);
