export function getInlineCode(text, color?) {
  return `
  <code class="language" 
    style="
      color: ${color ? color : "#e32352"}; 
      font-family: 'Source Code Pro', monospace; 
      font-size: .8em; 
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
      background-color: rgba(214,143,96,0.16);
      border-left: 1px solid rgba(187,119,30,0.18);
      border-right: 1px solid rgba(187,119,30,0.18);
      padding: 1px 0 1px 8px;
      margin-right: 5px;
      margin-left: 3px;
    ">
    ${text}
  </code>
  `;
}
