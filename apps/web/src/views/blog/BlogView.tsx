import { Navbar } from "@/components/layout/Navbar";
import { getBlogPosts } from "@/lib/blog-service";
import { BlogCard } from "./components/BlogCard";

export default async function BlogView() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-fluid px-4 md:px-8 py-24 space-y-12 max-w-[1600px] mx-auto">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Updates, tutorials, and insights from the team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
