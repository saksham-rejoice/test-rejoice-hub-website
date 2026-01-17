export type Heading = {
  level: number;
  text: string;
  id: string;
};

export function getHeadings(markdown: string): Heading[] {
  // Allow optional leading whitespace before #
  const headingRegex = /^\s*(#{1,6})\s+(.*)$/gm;
  const headings: Heading[] = [];
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2].trim(),
      id: match[2].trim().toLowerCase().replace(/[^\w]+/g, '-'),
    });
  }
  return headings;
}
