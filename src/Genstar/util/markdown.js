const HEADING = /^(#{1,6})\s+(.*)$/;
const BOLD = /\*\*([^*]+)\*\*/g;

export function parseInline(text) {
  const parts = [];
  let lastIndex = 0;
  const pattern = new RegExp(BOLD.source, "g");
  let match = pattern.exec(text);

  while (match) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: "strong", value: match[1] });
    lastIndex = match.index + match[0].length;
    match = pattern.exec(text);
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", value: text.slice(lastIndex) });
  }

  return parts.length ? parts : [{ type: "text", value: text }];
}

export function slugifyFilename(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function storyMarkdownFilename(text) {
  if (!text || !String(text).trim()) {
    return "story.md";
  }

  const heading = String(text)
    .split(/\r?\n/)
    .map((line) => line.match(HEADING))
    .find(Boolean);

  if (!heading) {
    return "story.md";
  }

  const slug = slugifyFilename(heading[2].trim());
  return slug ? `${slug}.md` : "story.md";
}

export function parseStoryMarkdown(text) {
  if (!text) {
    return [];
  }

  return text.split(/\r?\n/).reduce((blocks, line) => {
    if (!line.trim()) {
      return blocks;
    }

    const heading = line.match(HEADING);
    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length,
        children: parseInline(heading[2].trim()),
      });
      return blocks;
    }

    blocks.push({
      type: "paragraph",
      children: parseInline(line),
    });
    return blocks;
  }, []);
}
