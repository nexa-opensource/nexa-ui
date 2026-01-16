"use client";

import { Button } from "@/components/ui/button";
import { Share2, Twitter, Linkedin } from "lucide-react";

export function ShareButtons() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" className="rounded-full">
        <Twitter className="w-4 h-4" />
      </Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <Linkedin className="w-4 h-4" />
      </Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <Share2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
