"use client";
import { Link } from "@/i18n/routing";
import { Package2, Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/images/logo-brandmark.png";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

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
              {t("description")}
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
            <h3 className="font-bold mb-4">{t("product")}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/components"
                  className="hover:text-foreground transition-colors"
                >
                  {t("components")}
                </Link>
              </li>
              <li>
                <Link
                  href="/themes"
                  className="hover:text-foreground transition-colors"
                >
                  {t("themes")}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-foreground transition-colors"
                >
                  {t("pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="hover:text-foreground transition-colors"
                >
                  {t("showcase")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t("resources")}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-foreground transition-colors"
                >
                  {t("documentation")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t("community")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t("helpCenter")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t("legal")}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="hover:text-foreground transition-colors"
                >
                  {t("license")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t("rights")}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            {t("status")}
          </div>
        </div>
      </div>
    </footer>
  );
}
