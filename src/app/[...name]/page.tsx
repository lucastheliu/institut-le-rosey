import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import Table from "@/components/table";

interface Props {
  params: Promise<{
    name: string[];
  }>;
}

function extract(content: string) {
  const headings = content.match(/^#{1,3} .+$/gm) || [];

  return headings.map((heading) => {
    const level = heading.match(/^#+/)?.[0].length || 0;
    const text = heading.replace(/^#+\s+/, "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s{2,}/g, "--")
      .replace(/\s/g, "-")
      .replace(/-+$/, "");
    return { level, text, id };
  });
}

export async function generateStaticParams() {
  const directory = path.join(process.cwd(), "src", "app", "content");
  const files = fs.readdirSync(directory);

  return files
    .filter((name) => name.endsWith(".md"))
    .map((name) => ({
      name: name.replace(".md", "").split("/"),
    }));
}

export default async function Page({ params }: Props) {
  const { name } = await params;

  const file = path.join(process.cwd(), "src", "app", "content", `${name}.md`);
  const content = fs.readFileSync(file, "utf8");
  const toc = extract(content);

  return (
    <div className="flex flex-col">
      <div className="flex w-screen p-4">
        <aside className="hidden md:block fixed top-0 h-screen overflow-y-auto w-80 px-8 pr-16">
          <Table toc={toc} />
        </aside>
        <main className="md:ml-60 w-full">
          <div className="flex justify-center p-16">
            <article className="prose prose-zinc max-w-3xl">
              <Markdown>{content}</Markdown>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
