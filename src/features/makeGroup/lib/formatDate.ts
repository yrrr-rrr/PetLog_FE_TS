export function formatDate(h: number, m: number) {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
}
