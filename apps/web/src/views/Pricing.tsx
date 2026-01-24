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
import { Check, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function PricingPage() {
  const t = useTranslations("Pricing");
  const [isAnnual, setIsAnnual] = useState(false);

  // Define plans inside component to use translation hook
  const pricingPlans = [
    {
      id: "hobby",
      name: t("plans.hobby.name"),
      description: t("plans.hobby.desc"),
      monthlyPrice: 0,
      yearlyPrice: 0,
      buttonText: t("plans.hobby.button"),
      buttonVariant: "outline" as const,
      features: [
        { text: t("plans.hobby.features.access"), included: true },
        { text: t("plans.hobby.features.community"), included: true },
        { text: t("plans.hobby.features.basic"), included: true },
        { text: t("plans.hobby.features.charts"), included: false },
        { text: t("plans.hobby.features.priority"), included: false },
      ],
    },
    {
      id: "pro",
      name: t("plans.pro.name"),
      description: t("plans.pro.desc"),
      monthlyPrice: 15,
      yearlyPrice: 12,
      buttonText: t("plans.pro.button"),
      buttonVariant: "default" as const,
      isPopular: true,
      features: [
        { text: t("plans.pro.features.everythingHobby"), included: true },
        { text: t("plans.pro.features.charts"), included: true },
        { text: t("plans.pro.features.multiple"), included: true },
        { text: t("plans.pro.features.priority"), included: true },
        { text: t("plans.pro.features.remove"), included: true },
      ],
    },
    {
      id: "enterprise",
      name: t("plans.enterprise.name"),
      description: t("plans.enterprise.desc"),
      monthlyPrice: 49,
      yearlyPrice: 49,
      buttonText: t("plans.enterprise.button"),
      buttonVariant: "outline" as const,
      features: [
        { text: t("plans.enterprise.features.everythingPro"), included: true },
        { text: t("plans.enterprise.features.unlimited"), included: true },
        { text: t("plans.enterprise.features.dedicated"), included: true },
        { text: t("plans.enterprise.features.custom"), included: true },
        { text: t("plans.enterprise.features.sla"), included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-fluid px-4 md:px-8 py-24 space-y-12 max-w-[1600px] mx-auto">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Label
              htmlFor="billing-toggle"
              className={
                !isAnnual ? "text-foreground" : "text-muted-foreground"
              }
            >
              {t("monthly")}
            </Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label
              htmlFor="billing-toggle"
              className={isAnnual ? "text-foreground" : "text-muted-foreground"}
            >
              {t("yearly")}{" "}
              <span className="text-xs text-green-500 font-medium ml-1">
                {t("save20")}
              </span>
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col relative ${
                plan.isPopular ? "border-primary shadow-lg" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary">
                    {t("popular")}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">
                    $
                    {isAnnual && plan.yearlyPrice !== undefined
                      ? plan.yearlyPrice
                      : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/{t("month")}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 ${
                        !feature.included ? "text-muted-foreground" : ""
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.buttonVariant}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
