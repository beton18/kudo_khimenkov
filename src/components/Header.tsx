import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">{siteConfig.siteName}</div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#groups" className="hover:text-primary transition-colors">Направления</a>
            <a href="#coaches" className="hover:text-primary transition-colors">Тренеры</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <div className="flex gap-3">
            <a
              href={siteConfig.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a
              href={siteConfig.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

