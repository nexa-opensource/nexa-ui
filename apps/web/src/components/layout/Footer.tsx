"use client";
import Link from "next/link";
import { Package2, Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/images/logo-brandmark.png";
export function Footer() {
  return (
    <footer className="border-t bg-muted/10">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src={Logo} alt="" width={24} height={24} />
              <span className="hidden font-bold sm:inline-block tracking-tight text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-600">
                NexaUIKit
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Beautifully designed components built with Radix UI and Tailwind
              CSS. Open source and free to use in your applications.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/components"
                  className="hover:text-foreground transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/themes"
                  className="hover:text-foreground transition-colors"
                >
                  Themes
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="hover:text-foreground transition-colors"
                >
                  Showcase
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="hover:text-foreground transition-colors"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 NexaUIKit. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
