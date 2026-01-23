"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Package2,
  Github,
  Moon,
  Sun,
  Menu,
  Search,
  Command,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Logo from "@/assets/images/logo-brandmark.png";
import Image from "next/image";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-4 left-0 right-0 z-50 px-0">
        <div className="container mx-auto flex h-14 items-center bg-transparent border-transparent px-4 md:px-6"></div>
      </header>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "px-4" : "px-0"
      )}
    >
      <div
        className={cn(
          "container mx-auto flex h-14 items-center rounded-full border transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg border-border px-6"
            : "bg-transparent border-transparent px-4 md:px-6"
        )}
      >
        <div className="mr-4 hidden md:flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="bg-muted text-primary-foreground p-1 rounded-md">
              <Image src={Logo} alt="" width={24} height={24} />
            </div>
            <span className="hidden font-bold sm:inline-block tracking-tight text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-600">
              NexaUIKit
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </Link>
            <Link
              href="/themes"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Themes
            </Link>
            <Link
              href="/showcase"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Showcase
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:flex items-center flex-1 max-w-sm ml-auto mr-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full h-9 rounded-md border border-input bg-muted/50 px-9 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <div className="absolute right-2 top-2 flex items-center gap-0.5 text-xs text-muted-foreground border px-1.5 rounded bg-background">
              <Command className="h-3 w-3" />
              <span>K</span>
            </div>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2">
              <Package2 className="h-6 w-6" />
              <span className="font-bold">ShadcnUIKit</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/docs"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Documentation
                </Link>
                <Link
                  href="/components"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Components
                </Link>
                <Link
                  href="/themes"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Themes
                </Link>
                <Link
                  href="/showcase"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Showcase
                </Link>
                <Link
                  href="/pricing"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="text-foreground/70 transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center justify-end space-x-2 ml-auto md:ml-0">
          <nav className="flex items-center gap-1">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Button variant="ghost" className="w-9 px-0" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
