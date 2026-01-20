import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-primary">J</span>
                <span className="text-background">and</span>
                <span className="text-secondary">J</span>
              </span>
              <span className="ml-1 text-lg font-semibold text-background/80">
                Foods
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Bringing you the freshest, most delicious bottled juices made with 100% natural ingredients. Taste the difference of quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Our Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Quality & Ingredients", path: "/quality" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Business</h4>
            <ul className="space-y-2">
              {[
                { name: "Become a Distributor", path: "/distributors" },
                { name: "Bulk Orders", path: "/distributors#bulk-order" },
                { name: "Contact Us", path: "/distributors#bulk-order" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70 text-sm">info@jandjfoods.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Fresh Lane, Juice City,<br />Kerala, India - 680001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} JandJ Foods. All rights reserved. Made with 🍊 in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
