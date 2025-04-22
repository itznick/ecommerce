export const QuickLinks = () => {
  const links = [
    { label: "About Us", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold">Quick Links</h3>
      <ul className="mt-3 space-y-2">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="text-gray-400 hover:text-white">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
