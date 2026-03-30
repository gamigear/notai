export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/·/g, "-")
    .replace(/[\/\s]+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
