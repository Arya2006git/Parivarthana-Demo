import { Leaf, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { name: "All Products", href: "#" },
      { name: "Home Decor", href: "#" },
      { name: "Stationery", href: "#" },
      { name: "Accessories", href: "#" },
      { name: "Gift Cards", href: "#" },
    ],
  },
  about: {
    title: "About",
    links: [
      { name: "Our Story", href: "#" },
      { name: "Artisans", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Impact Report", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { name: "FAQs", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Size Guide", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="eco-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-leaf" />
              </div>
              <span className="font-serif text-xl font-semibold">Parivarthana</span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Transforming waste into wonder, one handmade product at a time. 
              Small choices, big change.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Parivarthana. Made with 💚 for Earth.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
