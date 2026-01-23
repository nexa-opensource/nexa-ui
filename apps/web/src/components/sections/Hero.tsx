"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  ChevronRight,
  Star,
  Copy,
  Check,
  Zap,
  Command,
  CreditCard,
  Activity,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const [copied, setCopied] = useState(false);
  const code = "npx shadcn@latest add button";

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={targetRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-[100%] blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-[100%] blur-[100px] -z-10" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-[100%] blur-[100px] -z-10" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm text-muted-foreground"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="font-medium">Shadcn UI Kit v2.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground"
            >
              Build your next idea <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-600">
                even faster.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed"
            >
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="h-12 px-8 text-base gap-2 rounded-full shadow-lg hover:shadow-primary/20 transition-all"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <div
                className="flex items-center gap-2 h-12 px-4 rounded-full border bg-muted/50 text-sm font-mono text-muted-foreground cursor-pointer hover:bg-muted transition-colors relative group"
                onClick={onCopy}
              >
                <ChevronRight className="h-4 w-4 text-primary" />
                {code}
                <div className="ml-2 pl-2 border-l border-border/50">
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 group-hover:text-foreground transition-colors" />
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual: Floating Cards Composition */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative perspective-1000">
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, rotateX: 20, rotateY: -20, z: -100 }}
              animate={{ opacity: 1, rotateX: 0, rotateY: 0, z: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className="relative z-20 bg-background border rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="h-10 bg-muted/30 border-b flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-2 w-20 bg-muted rounded" />
                    <div className="h-4 w-32 bg-primary/20 rounded" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-muted" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 space-y-3">
                    <Activity className="w-6 h-6 text-blue-500" />
                    <div className="h-2 w-12 bg-blue-500/20 rounded" />
                    <div className="h-4 w-16 bg-blue-500/20 rounded" />
                  </div>
                  <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 space-y-3">
                    <CreditCard className="w-6 h-6 text-violet-500" />
                    <div className="h-2 w-12 bg-violet-500/20 rounded" />
                    <div className="h-4 w-16 bg-violet-500/20 rounded" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-muted rounded" />
                  <div className="h-2 w-5/6 bg-muted rounded" />
                  <div className="h-2 w-4/6 bg-muted rounded" />
                </div>
                <Button className="w-full">Dashboard Action</Button>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 30, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="absolute -right-4 top-10 z-30 bg-background/80 backdrop-blur-md border rounded-xl p-4 shadow-xl w-48 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="h-2 w-16 bg-muted rounded mb-1" />
                  <div className="h-2 w-10 bg-muted/50 rounded" />
                </div>
              </div>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-green-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ opacity: 1, x: -30, y: -40 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="absolute -left-4 bottom-20 z-10 bg-background/80 backdrop-blur-md border rounded-xl p-4 shadow-xl w-48"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="h-2 w-20 bg-muted rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-8 w-full bg-muted/20 rounded border border-dashed border-muted flex items-center justify-center text-[10px] text-muted-foreground font-mono">
                  {"<Component />"}
                </div>
                <div className="h-8 w-full bg-muted/20 rounded border border-dashed border-muted flex items-center justify-center text-[10px] text-muted-foreground font-mono">
                  {"<Button />"}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
