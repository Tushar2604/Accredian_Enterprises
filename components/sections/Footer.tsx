import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const footerLinks = {
  Solutions: [
    "Enterprise Learning",
    "Custom Programs",
    "Analytics Dashboard",
    "HR Integrations",
    "Certificates",
  ],
  Programs: [
    "Data Science & AI",
    "Product Management",
    "Leadership",
    "Business Analytics",
    "Cloud Computing",
  ],
  Company: [
    "About Us",
    "Careers",
    "Blog",
    "Press",
    "Contact",
  ],
  Resources: [
    "Case Studies",
    "Whitepapers",
    "Webinars",
    "L&D Playbook",
    "API Docs",
  ],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:enterprise@accredian.com" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 lg:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-5">
            {/* Logo */}
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                  <path d="M8 6h16a2 2 0 0 1 2 2v4H6V8a2 2 0 0 1 2-2ZM6 14h20v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8Zm4 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H10Z" />
                </svg>
              </div>
              <div>
                <span className="text-base font-bold font-display text-white">Accredian</span>
                <p className="text-[10px] font-semibold text-brand-blue/70 font-body tracking-widest uppercase -mt-0.5">
                  Enterprise
                </p>
              </div>
            </a>

            <p className="text-sm text-white/40 font-body leading-relaxed">
              India&apos;s most trusted enterprise learning platform. Upskill your workforce
              with programs from IITs, IIMs, and global universities.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-semibold font-body text-white/50 tracking-widest uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 font-body hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-body text-center sm:text-left">
            © {new Date().getFullYear()} Accredian. All rights reserved. Accredian is a registered trademark.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 font-body hover:text-white/60 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
