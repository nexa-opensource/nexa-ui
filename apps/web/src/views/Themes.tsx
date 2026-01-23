"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState, useEffect } from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  {
    name: "Zinc",
    color: "240 5.9% 10%", // Zinc-950
    activeColor: "bg-zinc-950",
    css: `
      --primary: 240 5.9% 10%;
      --primary-foreground: 0 0% 98%;
    `,
  },
  {
    name: "Red",
    color: "0 72.2% 50.6%", // Red-600
    activeColor: "bg-red-600",
    css: `
      --primary: 0 72.2% 50.6%;
      --primary-foreground: 0 85.7% 97.3%;
    `,
  },
  {
    name: "Rose",
    color: "346.8 77.2% 49.8%", // Rose-600
    activeColor: "bg-rose-600",
    css: `
      --primary: 346.8 77.2% 49.8%;
      --primary-foreground: 355.7 100% 97.3%;
    `,
  },
  {
    name: "Orange",
    color: "24.6 95% 53.1%", // Orange-500
    activeColor: "bg-orange-500",
    css: `
      --primary: 24.6 95% 53.1%;
      --primary-foreground: 60 9.1% 97.8%;
    `,
  },
  {
    name: "Green",
    color: "142.1 76.2% 36.3%", // Green-600
    activeColor: "bg-green-600",
    css: `
      --primary: 142.1 76.2% 36.3%;
      --primary-foreground: 355.7 100% 97.3%;
    `,
  },
  {
    name: "Blue",
    color: "221.2 83.2% 53.3%", // Blue-600
    activeColor: "bg-blue-600",
    css: `
      --primary: 221.2 83.2% 53.3%;
      --primary-foreground: 210 40% 98%;
    `,
  },
  {
    name: "Yellow",
    color: "47.9 95.8% 53.1%", // Yellow-500
    activeColor: "bg-yellow-500",
    css: `
      --primary: 47.9 95.8% 53.1%;
      --primary-foreground: 26 83.3% 14.1%;
    `,
  },
  {
    name: "Violet",
    color: "262.1 83.3% 57.8%", // Violet-600
    activeColor: "bg-violet-600",
    css: `
      --primary: 262.1 83.3% 57.8%;
      --primary-foreground: 210 40% 98%;
    `,
  },
];

export default function ThemesPage() {
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Apply theme changes purely for visualization within this component
  // In a real app this would write to global CSS or context

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-fluid px-4 md:px-8 py-24 space-y-8 max-w-[1600px] mx-auto">
        {/* Banner Ad Space */}
        <div className="w-full h-24 rounded-lg bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 border border-orange-500/20 flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <div className="flex flex-col items-center z-10">
            <span className="font-bold text-sm text-foreground/80 tracking-wide">
              THEME SPONSOR
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Showcase your brand here
            </span>
          </div>
          <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-background/50 text-[10px] text-muted-foreground border">
            Ad
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Theme Customizer
          </h1>
          <p className="text-xl text-muted-foreground">
            Customize your UI experience. Pick a style and color for your
            components.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
          {/* Preview Area */}
          <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
            <div
              className="p-8 space-y-8"
              style={
                {
                  "--primary":
                    activeTheme.name === "Zinc"
                      ? "240 5.9% 10%"
                      : activeTheme.color,
                } as React.CSSProperties
              }
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Dashboard</h3>
                <p className="text-muted-foreground">
                  Overview of your project activity.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col gap-4 p-6 border rounded-lg bg-muted/20">
                <h4 className="font-medium">Form Elements</h4>
                <div className="flex gap-4 flex-wrap">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Controls */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-base">Color</Label>
              <div className="grid grid-cols-3 gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => setActiveTheme(theme)}
                    className={cn(
                      "group flex items-center gap-2 rounded-md border p-2 text-xs font-medium hover:bg-accent hover:text-accent-foreground",
                      activeTheme.name === theme.name
                        ? "border-primary bg-accent"
                        : "bg-transparent"
                    )}
                  >
                    <span
                      className="h-4 w-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `hsl(${theme.color})` }}
                    >
                      {activeTheme.name === theme.name && (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </span>
                    {theme.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base">Mode</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={mode === "light" ? "default" : "outline"}
                  className="justify-start gap-2"
                  onClick={() => {
                    setMode("light");
                    document.documentElement.classList.remove("dark");
                  }}
                >
                  <Sun className="h-4 w-4" /> Light
                </Button>
                <Button
                  variant={mode === "dark" ? "default" : "outline"}
                  className="justify-start gap-2"
                  onClick={() => {
                    setMode("dark");
                    document.documentElement.classList.add("dark");
                  }}
                >
                  <Moon className="h-4 w-4" /> Dark
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
