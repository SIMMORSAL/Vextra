import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import ReactMarkdown from "react-markdown";

function LinkRenderer(p: any) {
  return (
    <a href={p.href} target="_blank" rel="noreferrer">
      {p.children}
    </a>
  );
}

interface Props {
  text: string;
  style?: SerializedStyles;
}

export default function MarkDown(p: Props) {
  return (
    <ReactMarkdown css={p.style} components={{ a: LinkRenderer }}>
      {p.text}
    </ReactMarkdown>
  );
}
