"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Navbar } from "@/components/layout/Navbar";
import { ChevronRight, Play, Copy, Moon, Sun, Check } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// --- Mock Components for Examples ---

import { useTranslations } from "next-intl";

export default function Docs() {
  const t = useTranslations("Docs");

  // Sidebar Nav Items helper to use translations
  const sidebarNav = [
    {
      title: t("sidebar.gettingStarted"),
      items: [
        { title: t("sidebar.introduction"), href: "/docs" },
        { title: t("sidebar.installation"), href: "/docs/installation" },
        { title: t("sidebar.theming"), href: "/docs/theming" },
      ],
    },
    {
      title: t("sidebar.examples"),
      items: [
        { title: t("sidebar.components"), href: "/docs/examples/components" },
        { title: t("sidebar.hooks"), href: "/docs/examples/hooks" },
        { title: t("sidebar.theming"), href: "/docs/examples/theming" },
      ],
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      {/* Expanded container for "full screen" feel */}
      <div className="container-fluid px-4 md:px-8 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 pt-14 max-w-[1600px] mx-auto">
        {/* Sidebar Component with translated items */}
        <div className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <div className="w-full">
              {sidebarNav.map((group, index) => (
                <div key={index} className="pb-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                    {group.title}
                  </h4>
                  <div className="grid grid-flow-row auto-rows-max text-sm">
                    {group.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className={cn(
                          "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline",
                          "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <DocsContent t={t}>
          {/* Banner Ad Space */}
          <div className="mb-8 w-full h-24 rounded-lg bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 flex items-center justify-center relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <div className="flex flex-col items-center z-10">
              <span className="font-bold text-sm text-foreground/80 tracking-wide">
                SPECIAL SPONSOR
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                Get 50% off Pro features for a limited time
              </span>
            </div>
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-background/50 text-[10px] text-muted-foreground border">
              Ad
            </div>
          </div>

          <div className="space-y-12 w-full">
            <div id="introduction">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                {t("main.title")}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl">
                {t("main.subtitle")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="bg-muted/30 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t("main.installation")}
                    </CardTitle>
                    <CardDescription>
                      {t("main.installationDesc")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      npm install shadcn-ui-kit
                    </code>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t("main.theming")}
                    </CardTitle>
                    <CardDescription>{t("main.themingDesc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-muted-foreground">
                      {t("main.themingContent")}
                    </span>
                  </CardContent>
                </Card>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p>{t("main.openSource")}</p>
              </div>
            </div>

            <div id="components" className="scroll-mt-24 pt-8 border-t">
              <ComponentExample t={t} />
            </div>

            <div id="hooks" className="scroll-mt-24 pt-8 border-t">
              <HookExample t={t} />
            </div>

            <div id="themes" className="scroll-mt-24 pt-8 border-t">
              <ThemeExample t={t} />
            </div>

            <div className="flex items-center justify-between pt-12 mt-12">
              <div />
              <Link href="/">
                <Button variant="outline" className="group">
                  {t("backToHome")}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </DocsContent>
      </div>
    </div>
  );
}

// Local components to accept t prop
function DocsContent({ children, t }: { children: React.ReactNode; t: any }) {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">{children}</div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
          <ScrollArea className="h-full py-6 pl-6">
            {/* Ad Space Sidebar */}
            <div className="mb-6 rounded-lg border bg-muted/40 p-4 text-center">
              <div className="h-32 w-full bg-muted/60 rounded flex items-center justify-center text-muted-foreground text-xs border border-dashed border-muted-foreground/20">
                ADS VIA CARBON
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Sponsor our project to see your ad here.
              </p>
            </div>

            <h4 className="font-semibold text-sm mb-2">
              {t("main.onThisPage")}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#introduction" className="hover:text-foreground">
                  {t("sidebar.introduction")}
                </Link>
              </li>
              <li>
                <Link href="#components" className="hover:text-foreground">
                  {t("sidebar.components")}
                </Link>
              </li>
              <li>
                <Link href="#hooks" className="hover:text-foreground">
                  {t("sidebar.hooks")}
                </Link>
              </li>
              <li>
                <Link href="#themes" className="hover:text-foreground">
                  {t("sidebar.theming")}
                </Link>
              </li>
            </ul>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}

function ComponentExample({ t }: { t: any }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">
          {t("examples.button.title")}
        </h3>
        <p className="text-muted-foreground mb-4">
          {t("examples.button.desc")}
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="p-10 border rounded-lg flex items-center justify-center gap-4 bg-background"
        >
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </TabsContent>
        <TabsContent value="code">
          <div className="bg-zinc-950 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono text-white">
              {`import { Button } from "@/components/ui/button"
 
 export function ButtonDemo() {
   return <Button>Button</Button>
 }`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function HookExample({ t }: { t: any }) {
  const { toast } = useToast();

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">
          {t("examples.hook.title")}
        </h3>
        <p className="text-muted-foreground mb-4">{t("examples.hook.desc")}</p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="p-10 border rounded-lg flex items-center justify-center bg-background"
        >
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
              });
            }}
          >
            Show Toast
          </Button>
        </TabsContent>
        <TabsContent value="code">
          <div className="bg-zinc-950 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono text-white">
              {`import { useToast } from "@/hooks/use-toast"
 import { Button } from "@/components/ui/button"
 
 export function ToastDemo() {
   const { toast } = useToast()
 
   return (
     <Button
       onClick={() => {
         toast({
           title: "Scheduled: Catch up",
           description: "Friday, February 10, 2023 at 5:57 PM",
         })
       }}
     >
       Show Toast
     </Button>
   )
 }`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ThemeExample({ t }: { t: any }) {
  const [color, setColor] = useState("blue");

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">
          {t("examples.theme.title")}
        </h3>
        <p className="text-muted-foreground mb-4">{t("examples.theme.desc")}</p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="p-10 border rounded-lg bg-background"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {["blue", "violet", "orange", "green"].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={cn(
                    "w-6 h-6 rounded-full border ring-offset-background transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    color === c ? "ring-2 ring-ring ring-offset-2" : ""
                  )}
                  style={{
                    backgroundColor:
                      c === "blue"
                        ? "#3b82f6"
                        : c === "violet"
                          ? "#8b5cf6"
                          : c === "orange"
                            ? "#f97316"
                            : "#22c55e",
                  }}
                />
              ))}
            </div>
            <div
              className="p-4 border rounded-md"
              style={{
                borderColor:
                  color === "blue"
                    ? "#3b82f6"
                    : color === "violet"
                      ? "#8b5cf6"
                      : color === "orange"
                        ? "#f97316"
                        : "#22c55e",
                backgroundColor:
                  (color === "blue"
                    ? "#3b82f6"
                    : color === "violet"
                      ? "#8b5cf6"
                      : color === "orange"
                        ? "#f97316"
                        : "#22c55e") + "10",
              }}
            >
              <h4
                className="font-semibold"
                style={{
                  color:
                    color === "blue"
                      ? "#3b82f6"
                      : color === "violet"
                        ? "#8b5cf6"
                        : color === "orange"
                          ? "#f97316"
                          : "#22c55e",
                }}
              >
                Dynamic Theme Card
              </h4>
              <p className="text-sm mt-2 opacity-80">
                This card changes appearance based on the selected theme color
                token.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="bg-zinc-950 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono text-white">
              {`:root {
   --primary: 221.2 83.2% 53.3%; /* Blue */
 }
 
 .theme-violet {
   --primary: 262.1 83.3% 57.8%;
 }`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
