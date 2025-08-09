// components/Header.tsx
"use client"; // این را اضافه کنید، چون از useState استفاده می‌کنید

import { useState } from "react";
import { Button } from "@/components/ui/button"; // مسیر صحیح کامپوننت shadcn/ui
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  // 1. State برای مدیریت باز و بسته بودن منو
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // تابع برای اسکرول کردن به بخش مورد نظر
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // تابع برای بستن منو پس از کلیک روی یک آیتم
  const handleMobileLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    // از relative استفاده می‌کنیم تا منوی موبایل به آن وابسته باشد
    <header className="relative">
      <div className="fixed top-0 w-full z-50 glassmorphism shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <h1 className="text-2xl font-bold text-primary">Rastegar VRF</h1>
              <p className="text-sm text-muted-foreground hidden md:block">
                نصب و تعمیر پکیج و کولر اسپلیت
              </p>
            </div>

            <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                خدمات
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                درباره ما
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                تماس با ما
              </button>
            </nav>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-primary flex items-center space-x-2 space-x-reverse"
              >
                <Phone className="w-4 h-4" />
                <span>تماس فوری</span>
              </Button>

              {/* 2. دکمه منوی همبرگری برای موبایل */}

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // باز و بسته کردن منو
              >
                {/* نمایش آیکون ضربدر یا همبرگر بر اساس وضعیت منو */}
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* 3. منوی موبایل که به صورت شرطی نمایش داده می‌شود */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-lg p-4">
            <nav className="flex flex-col items-center space-y-4">
              <button
                onClick={() => handleMobileLinkClick('services')}
                className="text-foreground text-lg hover:text-primary transition-smooth"
              >
                خدمات
              </button>
              <button
                onClick={() => handleMobileLinkClick('about')}
                className="text-foreground text-lg hover:text-primary transition-smooth"
              >
                درباره ما
              </button>
              <button
                onClick={() => handleMobileLinkClick('contact')}
                className="text-foreground text-lg hover:text-primary transition-smooth"
              >
                تماس با ما
              </button>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;