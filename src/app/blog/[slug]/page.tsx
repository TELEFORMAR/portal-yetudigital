import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src", "posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main style={{ padding: "20px" }}>
        <h1>Post não encontrado</h1>
        <p>O artigo "{slug}" não existe.</p>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // ✅ garante string sem Promise
  const htmlContent: string = marked.parse(content) as string;

  return (
    <main style={{ padding: "20px" }}>
      <h1>{data.title}</h1>
      <p><em>{data.date}</em></p>
      <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
