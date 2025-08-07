// Contenido para: src/lib/mdx-utils.ts
import { getPostData } from './blog';

export async function importMdx(slug: string) {
  try {
    const post = await getPostData(slug);
    const { default: MdxContent } = await import(`@/content/blog/${slug}.mdx`);
    return { post, MdxContent };
  } catch (e) {
    return null;
  }
}