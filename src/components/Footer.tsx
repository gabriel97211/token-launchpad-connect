import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, MessageCircle, Github, FileText, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: MessageCircle, label: "Telegram", href: "#" },
    { icon: Github, label: "Github", href: "#" },
  ];

  const footerLinks = {
    "Project": [
      { label: "Whitepaper", href: "#whitepaper", icon: FileText },
      { label: "Audit Report", href: "#", icon: ExternalLink },
      { label: "Tokenomics", href: "#tokenomics" },
      { label: "Roadmap", href: "#roadmap" },
    ],
    "Community": [
      { label: "Discord", href: "#" },
      { label: "Reddit", href: "#" },
      { label: "Medium", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    "Support": [
      { label: "Contact Us", href: "#", icon: Mail },
      { label: "FAQ", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="relative mt-20 border-t border-border bg-background-secondary">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background-secondary to-background opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">
              Carbon Pepe X
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The first climate-focused meme token combining viral culture with real environmental impact and sustainable blockchain solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 rounded-full border border-border hover:border-primary hover:glow-primary transition-all duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.icon && <link.icon className="w-3 h-3 mr-2" />}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Carbon Pepe X. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-muted-foreground">Presale Live</span>
            </div>
            
            <div className="text-muted-foreground">
              Smart Contract: 
              <button className="ml-1 text-primary hover:text-primary-glow transition-colors font-mono text-xs">
                0x742d...5f3a
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-32 bg-gradient-secondary rounded-full blur-3xl opacity-5"></div>
    </footer>
  );
};

export default Footer;