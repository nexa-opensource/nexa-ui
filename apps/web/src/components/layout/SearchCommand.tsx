"use client";

import * as React from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  BookOpen,
  Component,
  LayoutTemplate,
  Palette,
  Rocket,
  Newspaper,
  CreditCard,
} from "lucide-react";
import { templates } from "@/data/templates";
import { Link } from "@/i18n/routing";

const showcaseItems = [
  {
    id: 1,
    title: "TaskMaster Pro",
    url: "/showcase",
  },
  {
    id: 2,
    title: "FinDash Analytics",
    url: "/showcase",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    url: "/showcase",
  },
  {
    id: 4,
    title: "HealthTrack App",
    url: "/showcase",
  },
  {
    id: 5,
    title: "E-commerce Starter",
    url: "/showcase",
  },
  {
    id: 6,
    title: "DevDocs Hub",
    url: "/showcase",
  },
];

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const router = useRouter();
  const t = useTranslations("Navbar");

  // Use a separate hook or just access the Search namespace if passed,
  // but since we are setup for namespaced, let's just use another hook for "Search".
  // However, next-intl usually recommends one hook per component or using rich translation.
  // Let's assume we can use `useTranslations("Search")` as well.
  const tSearch = useTranslations("Search");

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      onOpenChange(false);
      command();
    },
    [onOpenChange]
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={tSearch("placeholder")} />
      <CommandList>
        <CommandEmpty>{tSearch("noResults")}</CommandEmpty>
        <CommandGroup heading={tSearch("suggestions")}>
          <CommandItem
            value={`${t("docs")} Docs Documentation`}
            onSelect={() => runCommand(() => router.push("/docs"))}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            <span>{t("docs")}</span>
          </CommandItem>
          <CommandItem
            value={`${t("components")} Components`}
            onSelect={() => runCommand(() => router.push("/components"))}
          >
            <Component className="mr-2 h-4 w-4" />
            <span>{t("components")}</span>
          </CommandItem>
          <CommandItem
            value={`${t("templates")} Templates`}
            onSelect={() => runCommand(() => router.push("/templates"))}
          >
            <LayoutTemplate className="mr-2 h-4 w-4" />
            <span>{t("templates")}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />

        <CommandGroup heading={t("templates")}>
          {templates.map((template) => (
            <CommandItem
              key={template.id}
              value={`${template.title} ${template.category} template`}
              onSelect={() => runCommand(() => router.push(`/templates`))}
            >
              <LayoutTemplate className="mr-2 h-4 w-4" />
              <span>{template.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading={t("showcase")}>
          {showcaseItems.map((item) => (
            <CommandItem
              key={item.id}
              value={`${item.title} showcase`}
              onSelect={() => runCommand(() => router.push(item.url))}
            >
              <Rocket className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading={tSearch("explore")}>
          <CommandItem
            value={`${t("themes")} Themes`}
            onSelect={() => runCommand(() => router.push("/themes"))}
          >
            <Palette className="mr-2 h-4 w-4" />
            <span>{t("themes")}</span>
          </CommandItem>
          <CommandItem
            value={`${t("showcase")} Showcase`}
            onSelect={() => runCommand(() => router.push("/showcase"))}
          >
            <Rocket className="mr-2 h-4 w-4" />
            <span>{t("showcase")}</span>
          </CommandItem>
          <CommandItem
            value={`${t("blog")} Blog`}
            onSelect={() => runCommand(() => router.push("/blog"))}
          >
            <Newspaper className="mr-2 h-4 w-4" />
            <span>{t("blog")}</span>
          </CommandItem>
          <CommandItem
            value={`${t("pricing")} Pricing`}
            onSelect={() => runCommand(() => router.push("/pricing"))}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            <span>{t("pricing")}</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
