import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPost } from "@/lib/blog-service";

interface BlogCardProps {
  post: BlogPost;
}

import { useTranslations } from "next-intl";

export function BlogCard({ post }: BlogCardProps) {
  const t = useTranslations("Blog");

  return (
    <Link href={`/blog/${post.id}`} className="group cursor-pointer">
      <article className="flex flex-col gap-4 h-full">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-4 left-4 bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90">
            {post.category}
          </Badge>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-3 h-3" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </div>
          </div>
          <h2 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground line-clamp-2">
            {post.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t mt-auto">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          <div className="text-sm font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            {t("readMore")} <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}
