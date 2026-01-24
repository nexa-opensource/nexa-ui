"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

export default function ComponentsPage() {
  const t = useTranslations("ComponentsPage");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-fluid px-4 md:px-8 py-24 space-y-12 max-w-[1600px] mx-auto">
        {/* Banner Ad Space */}
        <div className="w-full h-24 rounded-lg bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <div className="flex flex-col items-center z-10">
            <span className="font-bold text-sm text-foreground/80 tracking-wide">
              COMPONENT SPONSOR
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Sponsor this page to reach thousands of developers
            </span>
          </div>
          <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-background/50 text-[10px] text-muted-foreground border">
            Ad
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t("cards.card.title")}</CardTitle>
                <CardDescription>{t("cards.card.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <div className="flex flex-col space-y-1.5 p-0">
                    <h3 className="font-semibold leading-none tracking-tight">
                      {t("cards.card.notificationTitle")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("cards.card.notificationDesc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Buttons Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t("cards.button.title")}</CardTitle>
                <CardDescription>{t("cards.button.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inputs Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t("cards.input.title")}</CardTitle>
                <CardDescription>{t("cards.input.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="file">Picture</Label>
                  <Input id="file" type="file" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Badges Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t("cards.badge.title")}</CardTitle>
                <CardDescription>{t("cards.badge.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {/* ... badges as is ... */}
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>
          </motion.div>

          {/* Avatar Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t("cards.avatar.title")}</CardTitle>
                <CardDescription>{t("cards.avatar.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interactive Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t("cards.interactive.title")}</CardTitle>
                <CardDescription>{t("cards.interactive.desc")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="airplane-mode">
                    {t("cards.interactive.airplaneMode")}
                  </Label>
                  <Switch id="airplane-mode" />
                </div>
                <div className="space-y-2">
                  <Label>{t("cards.interactive.volume")}</Label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
