export function slugCreator(slug: string) {
  const slugs = slug
    .split(/\s+|\W+/)
    .filter((word: string) => word.trim() !== "")
    .join("-");
  return slugs;
}
