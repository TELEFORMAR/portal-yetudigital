import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const POSTS_PER_PAGE = 5;

export default async function BlogPage({ searchParams }: { searchParams?: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = parseInt(params?.page || "1", 10);

  const postsDir = path.join(process.cwd(), "src", "posts");
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];

  const posts = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
    };
  });

  // Ordenar por data
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Blog Yetu</h1>

      {posts.length === 0 ? (
        <p style={{ marginTop: "20px", color: "gray" }}>
          Nenhum post encontrado. Volte mais tarde!
        </p>
      ) : (
        <>
          <ul>
            {paginatedPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  {post.title} ({post.date})
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "20px" }}>
            {currentPage > 1 && (
              <Link href={`/blog?page=${currentPage - 1}`}>← Página anterior</Link>
            )}
            {currentPage < totalPages && (
              <Link href={`/blog?page=${currentPage + 1}`} style={{ marginLeft: "10px" }}>
                Próxima página →
              </Link>
            )}
          </div>
        </>
      )}
    </main>
  );
}
