import { footerLinks } from "@/academy-constants/footerConstants";
import { socialMedia } from "@/academy-constants/soMeConstants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href={"/"}>
            <Image
              src={"/academyAssets/images/footer-logo.svg"}
              alt="Footer Logo"
              width={150}
              height={46}
            />
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect Size in Store. Ger Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((soMe, index) => (
              <div
                key={(index + 95892) * 35892}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <Image src={soMe.src} alt={soMe.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((fl, index) => (
            <div className="" key={(index + 298534) * 28952}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {fl.title}
              </h4>
              <ul>
                {fl.links.map((flLink, index) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={(index + 269286) * 95987}
                  >
                    <Link href={"/"}>{flLink.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start gap-2 items-center font-montserrat cursor-pointer">
          <Image
            src={"/academyAssets/icons/copyright-sign.svg"}
            alt="Copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reservec.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
