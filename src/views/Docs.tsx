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

function ComponentExample() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">
          Button Component
        </h3>
        <p className="text-muted-foreground mb-4">
          Displays a button or a component that looks like a button.
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

function HookExample() {
  const { toast } = useToast();

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">
          useToast Hook
        </h3>
        <p className="text-muted-foreground mb-4">
          A powerful hook to manage toast notifications.
        </p>
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

function ThemeExample() {
  const [color, setColor] = useState("blue");

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Theming</h3>
        <p className="text-muted-foreground mb-4">
          Use CSS variables for robust theming capabilities.
        </p>
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

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Examples",
    items: [
      { title: "Components", href: "/docs/examples/components" },
      { title: "Hooks", href: "/docs/examples/hooks" },
      { title: "Theming", href: "/docs/examples/theming" },
    ],
  },
];

function DocsSidebar() {
  return (
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
  );
}

function DocsContent({ children }: { children: React.ReactNode }) {
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

            <h4 className="font-semibold text-sm mb-2">On This Page</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#introduction" className="hover:text-foreground">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="#components" className="hover:text-foreground">
                  Components
                </Link>
              </li>
              <li>
                <Link href="#hooks" className="hover:text-foreground">
                  Hooks
                </Link>
              </li>
              <li>
                <Link href="#themes" className="hover:text-foreground">
                  Theming
                </Link>
              </li>
            </ul>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}

export default function Docs() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      {/* Expanded container for "full screen" feel */}
      <div className="container-fluid px-4 md:px-8 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 pt-14 max-w-[1600px] mx-auto">
        <DocsSidebar />
        <DocsContent>
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
                Documentation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl">
                Welcome to the comprehensive documentation for ShadcnUIKit. Here
                you will find detailed guides, component APIs, and practical
                examples to help you build better applications faster.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="bg-muted/30 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-lg">Installation</CardTitle>
                    <CardDescription>
                      Get up and running in minutes.
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
                    <CardTitle className="text-lg">Theming</CardTitle>
                    <CardDescription>
                      Customize every aspect of your app.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-muted-foreground">
                      Built with CSS Variables & Tailwind.
                    </span>
                  </CardContent>
                </Card>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Our library is designed to be copy-pasted into your project.
                  We don't believe in locking you into a specific dependency.
                  You own the code. You can customize it, extend it, and make it
                  your own.
                </p>
              </div>
            </div>

            <div id="components" className="scroll-mt-24 pt-8 border-t">
              <ComponentExample />
            </div>

            <div id="hooks" className="scroll-mt-24 pt-8 border-t">
              <HookExample />
            </div>

            <div id="themes" className="scroll-mt-24 pt-8 border-t">
              <ThemeExample />
            </div>

            <div className="flex items-center justify-between pt-12 mt-12">
              <div />
              <Link href="/">
                <Button variant="outline" className="group">
                  Back to Home
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
