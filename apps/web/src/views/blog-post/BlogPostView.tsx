import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/lib/blog-service";
import Link from "next/link";
import NotFound from "@/views/not-found";
import { ShareButtons } from "./components/ShareButtons";
import { Newsletter } from "./components/Newsletter";

export default async function BlogPostView({ id }: { id: string }) {
  const post = await getBlogPost(id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Progress Bar (Mock) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div className="h-full bg-primary w-1/3" />
      </div>

      <article className="container-fluid px-4 md:px-8 py-24 max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          <Link href="/blog">
            <Button
              variant="ghost"
              size="sm"
              className="-ml-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>

          <div className="flex gap-2">
            <Badge>{post.category}</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-b">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">
                  {post.author.role} • {post.date}
                </div>
              </div>
            </div>
            <ShareButtons />
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        <Newsletter />
      </article>
    </div>
  );
}
