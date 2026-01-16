"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Palette,
  Code2,
  Smartphone,
  Lock,
  Gauge,
  Check,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const features = [
  {
    id: "design",
    title: "The Design System",
    description:
      "A complete, composable architecture for your product. Global tokens, unified colors, and consistent spacing.",
    icon: Palette,
    content: (
      <div className="w-full h-full p-8 flex flex-col justify-center">
        <div className="bg-background rounded-xl border shadow-2xl p-6 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-2 w-20 bg-muted rounded-full" />
              <div className="h-10 w-full bg-primary/10 rounded-md border border-primary/20 flex items-center justify-center text-primary font-medium text-sm">
                Primary Action
              </div>
              <div className="h-10 w-full bg-secondary/20 rounded-md border border-secondary/20 flex items-center justify-center text-secondary-foreground font-medium text-sm">
                Secondary
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-20 bg-muted rounded-full" />
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md bg-muted/20 border border-muted/30"
                    style={{
                      backgroundColor: `hsl(${i * 40}, 70%, 50%)`,
                      opacity: 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>var(--radius)</span>
            <span>0.5rem</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "types",
    title: "Type Safe",
    description:
      "Built with TypeScript for a superior developer experience. Autocomplete, validation, and zero runtime errors.",
    icon: Code2,
    content: (
      <div className="w-full h-full flex items-center justify-center p-8 bg-zinc-950/90 dark:bg-black/40 backdrop-blur rounded-xl border border-white/10 shadow-2xl">
        <div className="font-mono text-sm leading-relaxed text-zinc-400 w-full">
          <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
            <div className="w-3 h-3 rounded-full bg-green-500/20" />
          </div>
          <div>
            <span className="text-purple-400">interface</span>{" "}
            <span className="text-yellow-200">ButtonProps</span>{" "}
            <span className="text-zinc-500">{"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">variant</span>:{" "}
            <span className="text-green-400">"default"</span> |{" "}
            <span className="text-green-400">"destructive"</span>;
          </div>
          <div className="pl-4">
            <span className="text-blue-400">size</span>:{" "}
            <span className="text-green-400">"sm"</span> |{" "}
            <span className="text-green-400">"lg"</span> |{" "}
            <span className="text-green-400">"icon"</span>;
          </div>
          <div className="pl-4">
            <span className="text-blue-400">asChild</span>?:{" "}
            <span className="text-red-400">boolean</span>;
          </div>
          <div>
            <span className="text-zinc-500">{"}"}</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "responsive",
    title: "Responsive",
    description:
      "Mobile-first architecture ensuring your app looks perfect on phones, tablets, and desktops automatically.",
    icon: Smartphone,
    content: (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-48 h-80 bg-background border-4 border-muted rounded-[2rem] shadow-xl overflow-hidden flex flex-col">
          <div className="h-6 bg-muted/10 border-b flex justify-center items-center">
            <div className="w-12 h-1 bg-muted rounded-full" />
          </div>
          <div className="flex-1 p-3 space-y-3 bg-muted/5">
            <div className="h-24 w-full bg-primary/10 rounded-lg animate-pulse" />
            <div className="h-4 w-2/3 bg-muted/20 rounded" />
            <div className="h-4 w-full bg-muted/20 rounded" />
            <div className="flex gap-2 mt-auto pt-4">
              <div className="h-8 flex-1 bg-primary rounded-md" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "performance",
    title: "Performance",
    description:
      "Optimized for speed with zero-runtime overhead. Components compile to standard React & CSS.",
    icon: Gauge,
    content: (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-muted/20"
            />
            <motion.circle
              initial={{ strokeDashoffset: 565 }}
              whileInView={{ strokeDashoffset: 50 }}
              transition={{ duration: 2, ease: "easeOut" }}
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray="565.48"
              className="text-green-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold tracking-tighter">100</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mt-1">
              Score
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export function BentoFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveFeature((current) => (current + 1) % features.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Speed of rotation

    return () => clearInterval(timer);
  }, []);

  // Reset progress when manually changing feature
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setProgress(0);
  };

  return (
    <section className="container mx-auto py-32 space-y-24">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Engineered for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Excellence
          </span>
          .
        </h2>
        <p className="text-muted-foreground text-xl max-w-[800px] mx-auto leading-relaxed">
          We rethought the component library from the ground up. Here is what
          makes ShadcnUIKit different.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Feature List */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => handleFeatureClick(index)}
              className={cn(
                "relative pl-8 py-6 rounded-xl cursor-pointer transition-all duration-300 border border-transparent hover:bg-muted/30",
                activeFeature === index
                  ? "bg-muted/30"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              {/* Progress Bar for Active Item */}
              {activeFeature === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-muted/50 rounded-l-xl overflow-hidden">
                  <motion.div
                    className="w-full bg-primary"
                    style={{ height: `${progress}%` }}
                  />
                </div>
              )}
              {/* Static Bar for Inactive Items */}
              {activeFeature !== index && (
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-muted/20 rounded-full mx-auto" />
              )}

              <div className="space-y-2">
                <h3
                  className={cn(
                    "text-2xl font-bold flex items-center gap-3",
                    activeFeature === index ? "text-primary" : "text-foreground"
                  )}
                >
                  <feature.icon className="w-6 h-6" />
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Visual Preview */}
        <div className="relative h-[600px] w-full bg-muted/10 rounded-[2.5rem] border overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.05, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
            >
              {features[activeFeature].content}
            </motion.div>
          </AnimatePresence>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
