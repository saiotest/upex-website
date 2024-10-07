'use client'

import Link from "next/link"
import { useTranslations} from "next-intl";

export default function Header() {
  const footer = useTranslations("footer");
  return (
    <footer className="bg-[#020B2D] py-6 px-4">
        <div className="container mx-auto text-center">
            <p className="mb-4 text-white">{footer("description")}</p>
            <div className="flex flex-wrap justify-center space-x-4">
            <Link href="https://upex.docu.upexgalaxy.com/wiki/x/IgD1C" target="_blank" className="text-white hover:text-[#00FFFF] mb-2">{footer("aboutUs")}</Link>
            {/* <Link href="#" className="text-white hover:text-[#00FFFF] mb-2">{footer("contact")}</Link> */}
            <Link href="https://upex.docu.upexgalaxy.com/wiki/external/MjYwZjFmYzNlMDJjNDgwY2JlODNiMzIxYTUyMTQ1MzA" target="_blank" className="text-white hover:text-[#00FFFF] mb-2">{footer("privacyPolicy")}</Link>
            {/* <Link href="https://upex.docu.upexgalaxy.com/wiki/external/MjYwZjFmYzNlMDJjNDgwY2JlODNiMzIxYTUyMTQ1MzA" className="text-white hover:text-[#00FFFF] mb-2">{footer("termsOfService")}</Link> */}
            </div>
            <p className="text-sm text-gray-400">
              © 2024 UPEX Quality LLC. | {footer("rightsReserved")}
            </p>
        </div>
    </footer>
  );
}