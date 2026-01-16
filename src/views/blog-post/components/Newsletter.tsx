"use client";

import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <div className="mt-16 p-8 bg-muted/30 rounded-2xl border text-center space-y-4">
      <h3 className="text-2xl font-bold">Enjoyed this article?</h3>
      <p className="text-muted-foreground">
        Subscribe to our newsletter to get the latest updates directly in your
        inbox.
      </p>
      <div className="flex gap-2 max-w-sm mx-auto">
        <Button className="w-full">Subscribe</Button>
      </div>
    </div>
  );
}
