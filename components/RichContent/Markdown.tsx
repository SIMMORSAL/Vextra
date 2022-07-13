import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  coy,
  gruvboxLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

function LinkRenderer(p: any) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      css={css`
        color: orange;
      `}
    >
      {p.children}
    </a>
  );
}

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={gruvboxLight}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

interface Props {
  text: string;
  style?: SerializedStyles;
}

export default function MarkDown(p: Props) {
  return (
    <ReactMarkdown
      css={p.style}
      rehypePlugins={[rehypeRaw]}
      components={{ a: LinkRenderer, ...CodeBlock }}
    >
      {p.text}
    </ReactMarkdown>
  );
}
