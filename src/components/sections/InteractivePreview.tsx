"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
// import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Activity,
  CreditCard,
  DollarSign,
  Download,
  LayoutDashboard,
  Settings,
  Users,
  Search,
  Bell,
  MoreHorizontal,
  ArrowUpRight,
  Plus,
  Lock,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  LayoutGrid,
} from "lucide-react";

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
];

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "OM",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "JL",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "IN",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "WK",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    avatar: "SD",
  },
];

export function InteractivePreview() {
  const [activeView, setActiveView] = useState("overview");

  return (
    <section className="container mx-auto py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Dashboard Experience
        </h2>
        <p className="text-muted-foreground text-lg">
          A fully functional, responsive dashboard layout demonstrating the
          power of our components.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
        className="rounded-xl border bg-background shadow-2xl overflow-hidden max-w-6xl mx-auto ring-1 ring-slate-900/10 dark:ring-white/10"
      >
        {/* Browser Chrome */}
        <div className="h-11 bg-zinc-100/80 dark:bg-zinc-900/80 border-b flex items-center px-4 gap-4 sticky top-0 z-50 backdrop-blur-xl transition-colors">
          {/* Traffic Lights */}
          <div className="flex gap-2 mr-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5 shadow-sm group hover:scale-110 transition-transform" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5 shadow-sm group hover:scale-110 transition-transform" />
            <div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5 shadow-sm group hover:scale-110 transition-transform" />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 text-muted-foreground/40 hidden sm:flex">
            <ChevronLeft className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
            <ChevronRight className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
            <RotateCw className="w-3.5 h-3.5 hover:text-foreground transition-colors cursor-pointer" />
          </div>

          {/* Address Bar */}
          <div className="flex-1 max-w-xl mx-auto">
            <div className="h-7 w-full bg-background/60 dark:bg-black/20 rounded-lg flex items-center px-3 text-xs text-muted-foreground font-medium border border-border/50 shadow-sm transition-all hover:bg-background hover:shadow-md group cursor-text">
              <Lock className="w-3 h-3 mr-2 opacity-50 group-hover:text-green-500 transition-colors" />
              <span className="text-foreground/90">shadcn-ui-kit.com</span>
              <span className="text-muted-foreground/50">/dashboard</span>
            </div>
          </div>

          {/* Window Actions */}
          <div className="flex items-center gap-3 ml-auto hidden sm:flex">
            <div className="h-4 w-px bg-border/50" />
            <LayoutGrid className="w-4 h-4 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer" />
            <Plus className="w-4 h-4 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="grid md:grid-cols-[240px_1fr] min-h-[600px]">
          {/* Sidebar */}
          <div className="bg-muted/10 border-r hidden md:block p-4 space-y-4">
            <div className="flex items-center gap-2 px-2 py-1 mb-6">
              <div className="h-6 w-6 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                S
              </div>
              <span className="font-semibold">Shadcn Inc</span>
            </div>

            <div className="space-y-1">
              <Button
                variant={activeView === "overview" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => setActiveView("overview")}
              >
                <LayoutDashboard className="w-4 h-4" /> Overview
              </Button>
              <Button
                variant={activeView === "customers" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => setActiveView("customers")}
              >
                <Users className="w-4 h-4" /> Customers
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Activity className="w-4 h-4" /> Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <CreditCard className="w-4 h-4" /> Billing
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="w-4 h-4" /> Settings
              </Button>
            </div>

            <div className="mt-auto pt-4 border-t">
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="p-3 space-y-2">
                  <div className="text-xs font-semibold">Pro Plan</div>
                  <div className="text-xs text-muted-foreground">
                    You are using 80% of your plan.
                  </div>
                  <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-primary rounded-full" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs h-7"
                  >
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-background flex flex-col">
            <div className="h-16 border-b flex items-center px-6 justify-between gap-4">
              <h2 className="text-lg font-semibold capitalize">{activeView}</h2>
              <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    className="h-9 w-64 rounded-md border border-input bg-background px-9 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Search..."
                  />
                </div>
                <Button size="icon" variant="ghost">
                  <Bell className="h-4 w-4" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-muted border flex items-center justify-center text-xs font-medium">
                  JD
                </div>
              </div>
            </div>

            <div className="p-6 flex-1 bg-muted/5 space-y-6 overflow-y-auto max-h-[600px]">
              <AnimatePresence mode="wait">
                {activeView === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Total Revenue
                          </CardTitle>
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
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
                            Subscriptions
                          </CardTitle>
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+2350</div>
                          <p className="text-xs text-muted-foreground">
                            +180.1% from last month
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Sales
                          </CardTitle>
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+12,234</div>
                          <p className="text-xs text-muted-foreground">
                            +19% from last month
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">
                            Active Now
                          </CardTitle>
                          <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+573</div>
                          <p className="text-xs text-muted-foreground">
                            +201 since last hour
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                      <Card className="col-span-4">
                        <CardHeader>
                          <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                          <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md border border-dashed">
                            <p className="text-muted-foreground text-sm flex items-center gap-2">
                              <Activity className="w-4 h-4" /> Chart
                              Visualization
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="col-span-3">
                        <CardHeader>
                          <CardTitle>Recent Sales</CardTitle>
                          <CardDescription>
                            You made 265 sales this month.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-8">
                            {recentSales.map((sale, i) => (
                              <div key={i} className="flex items-center">
                                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                                  {sale.avatar}
                                </div>
                                <div className="ml-4 space-y-1">
                                  <p className="text-sm font-medium leading-none">
                                    {sale.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {sale.email}
                                  </p>
                                </div>
                                <div className="ml-auto font-medium">
                                  {sale.amount}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )}

                {activeView === "customers" && (
                  <motion.div
                    key="customers"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Customers</CardTitle>
                          <CardDescription>
                            Manage your customers and view their activity.
                          </CardDescription>
                        </div>
                        <Button size="sm" className="gap-2">
                          <Plus className="h-4 w-4" /> Add Customer
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <div className="grid grid-cols-4 p-4 font-medium text-sm text-muted-foreground bg-muted/50 border-b">
                            <div className="col-span-2">Customer</div>
                            <div>Status</div>
                            <div className="text-right">Total Spent</div>
                          </div>
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className="grid grid-cols-4 p-4 text-sm items-center border-b last:border-0 hover:bg-muted/5"
                            >
                              <div className="col-span-2 flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-muted" />
                                <div>
                                  <div className="font-medium">
                                    Customer {i}
                                  </div>
                                  <div className="text-muted-foreground text-xs">
                                    customer{i}@example.com
                                  </div>
                                </div>
                              </div>
                              <div>
                                <Badge
                                  variant="outline"
                                  className="bg-green-500/10 text-green-600 border-green-200"
                                >
                                  Active
                                </Badge>
                              </div>
                              <div className="text-right font-mono">
                                $250.00
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
