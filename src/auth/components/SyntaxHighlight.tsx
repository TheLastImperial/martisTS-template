// third-party
import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// ==============================|| CODE HIGHLIGHTER ||============================== //

export function SyntaxHighlight({ children, ...others }: SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter language="javacript" showLineNumbers style={a11yDark} {...others}>
      {children}
    </SyntaxHighlighter>
  );
}
