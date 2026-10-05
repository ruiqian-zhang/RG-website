/** Prefix site-local URLs for project hosting; preserve external links and anchors. */
export function withBase(url: string | undefined): string | undefined {
  if (!url || !url.startsWith('/') || url.startsWith('//')) return url;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base || url === base || url.startsWith(`${base}/`)) return url;
  return `${base}${url}`;
}
