import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/work");

export type ProjectFrontmatter = {
  slug: string;
  locale: string;
  category: string[];
  case_study_status: "draft" | "review" | "published" | string;
  stack: string[];
  title: string;
  summary: string;
  demo_url: string | null;
  repo_url: string | null;
  privacy_note: string | null;
};

export type ProjectDoc = {
  meta: ProjectFrontmatter;
  body: string;
};

export function getSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export function getProject(
  slug: string,
  locale: "tr" | "en",
): ProjectDoc | null {
  const filePath = path.join(CONTENT_DIR, slug, `${locale}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: data as ProjectFrontmatter,
    body: content.trim(),
  };
}

export function getAllProjectsForLocale(locale: "tr" | "en"): ProjectDoc[] {
  return getSlugs()
    .map((slug) => getProject(slug, locale))
    .filter((doc): doc is ProjectDoc => doc !== null)
    .sort((a, b) => a.meta.title.localeCompare(b.meta.title));
}
