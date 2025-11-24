import { Instagram } from "lucide-react";
import { siteConfig } from "@/config";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold">{siteConfig.siteName}</p>
            <p className="text-sm text-gray-400 mt-1">
              {siteConfig.contacts.phone}
            </p>
          </div>

          <div className="flex gap-4">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
            )}
          </div>

          <div className="text-center md:text-right text-sm text-gray-400">
            <p>&copy; 2024 {siteConfig.siteName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

