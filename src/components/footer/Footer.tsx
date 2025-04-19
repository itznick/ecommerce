import React from "react";
import { BrandSection } from "./BrandSection";
import { QuickLinks } from "./QuickLinks";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { FooterBottom } from "./FooterBottom";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto text-center md:grid-cols-3 md:text-left">
        <BrandSection />
        <QuickLinks />
        <SocialMediaLinks />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
