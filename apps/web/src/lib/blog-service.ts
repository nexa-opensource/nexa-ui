import { supabase } from "./supabase";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role?: string;
    avatar: string;
  };
  category: string;
  image: string;
  content?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return data.map(transformPost);
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;

  return transformPost(data);
}

function transformPost(row: any): BlogPost {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    date: row.date,
    readTime: row.read_time,
    category: row.category,
    image: row.image,
    content: row.content,
    author: {
      name: row.author_name,
      role: row.author_role,
      avatar: row.author_avatar,
    },
  };
}
