export function greeting(name: string): string {
  const trimmed = name.trim();
  return trimmed.length === 0 ? "Hello, stranger" : `Hello, ${trimmed}`;
}
