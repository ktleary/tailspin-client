import { storyMarkdownFilename } from "./markdown";

export function downloadStoryMarkdown(text) {
  const markdown = text == null ? "" : String(text);
  const filename = storyMarkdownFilename(markdown);
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
