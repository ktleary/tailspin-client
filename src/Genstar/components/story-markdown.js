import styled from "styled-components";
import { parseStoryMarkdown } from "../util/markdown";

const MarkdownRoot = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: "OpenSans", sans-serif;
  font-size: 14px;
  line-height: 1.5;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.87);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.25;
  margin: 0 0 8px;
`;

const Heading = styled.h2`
  color: rgba(255, 255, 255, 0.87);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.3;
  margin: 16px 0 8px;
`;

const Subheading = styled.h3`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 12px 0 6px;
`;

const Paragraph = styled.p`
  margin: 0 0 12px;
`;

const Kicker = styled.strong`
  color: rgba(255, 255, 255, 0.95);
  font-weight: 700;
`;

const headingTags = {
  1: Title,
  2: Heading,
  3: Subheading,
};

const renderInline = (children, keyPrefix) =>
  children.map((child, idx) =>
    child.type === "strong" ? (
      <Kicker key={`${keyPrefix}-strong-${idx}`}>{child.value}</Kicker>
    ) : (
      <span key={`${keyPrefix}-text-${idx}`}>{child.value}</span>
    )
  );

export default function StoryMarkdown({ text }) {
  const blocks = parseStoryMarkdown(text);

  return (
    <MarkdownRoot>
      {blocks.map((block, idx) => {
        if (block.type === "heading") {
          const Tag = headingTags[block.level] || Heading;
          return (
            <Tag key={`heading-${idx}`}>
              {renderInline(block.children, `h-${idx}`)}
            </Tag>
          );
        }

        return (
          <Paragraph key={`p-${idx}`}>
            {renderInline(block.children, `p-${idx}`)}
          </Paragraph>
        );
      })}
    </MarkdownRoot>
  );
}
