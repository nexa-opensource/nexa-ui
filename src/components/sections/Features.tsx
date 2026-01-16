import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Zap, Palette, Lock, Globe, Move3d } from "lucide-react";

const features = [
  {
    title: "Customizable",
    description: "Copy and paste into your apps and customize to your needs.",
    icon: Palette,
  },
  {
    title: "Responsive",
    description: "Designed to work perfectly on mobile, tablet, and desktop.",
    icon: Smartphone,
  },
  {
    title: "Accessible",
    description: "Built with accessibility in mind using Radix UI primitives.",
    icon: Lock,
  },
  {
    title: "Light & Dark Mode",
    description: "Automatic dark mode support with Tailwind CSS.",
    icon: Zap,
  },
  {
    title: "Open Source",
    description: "Free to use for personal and commercial projects.",
    icon: Globe,
  },
  {
    title: "Modern Animations",
    description: "Smooth interactions powered by Framer Motion.",
    icon: Move3d,
  },
];

export function Features() {
  return (
    <section className="container py-20 bg-muted/30">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Everything you need
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          A complete toolkit for building modern web applications.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <Card key={i} className="bg-background/50 backdrop-blur border-muted/60 transition-all hover:border-primary/20 hover:shadow-lg">
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
