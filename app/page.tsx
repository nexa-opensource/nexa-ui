import Home from "@/views/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexa UI Kit - Build Faster with Modern UI Components",
  description:
    "Accelerate your development with our premium, open-source UI kit. Featuring dark mode, accessibility, and smooth animations.",
};

export default function Page() {
  return <Home />;
}
