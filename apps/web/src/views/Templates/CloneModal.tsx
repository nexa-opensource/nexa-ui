"use client";

import { Template } from "@/types/template";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface CloneModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CloneModal({ template, isOpen, onClose }: CloneModalProps) {
  const t = useTranslations("Templates");
  const [copied, setCopied] = useState(false);

  if (!template) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(template.cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("cloneCommand")}</DialogTitle>
          <DialogDescription>{template.title}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="flex-1 rounded-md bg-muted p-3 font-mono text-sm overflow-x-auto">
              {template.cloneCommand}
            </div>
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={handleCopy}
              className="shrink-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">{t("copyCommand")}</span>
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" asChild>
              <a
                href={template.previewUrl}
                target="_blank"
                rel="noreferrer"
                className="gap-2"
              >
                {t("livePreview")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            {copied && (
              <span className="text-sm text-green-500">{t("copied")}</span>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
