import { Facebook, Instagram, Twitter } from "lucide-react";

export const SocialMediaLinks = () => {
  const socials = [
    { icon: <Facebook size={24} />, href: "#" },
    { icon: <Twitter size={24} />, href: "#" },
    { icon: <Instagram size={24} />, href: "#" },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold">Follow Us</h3>
      <div className="flex justify-center mt-3 space-x-4 md:justify-start">
        {socials.map(({ icon, href }, index) => (
          <a key={index} href={href} className="text-gray-400 hover:text-white">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};
