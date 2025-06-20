import type { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
}

export default function CodeBlock({ children, language = 'tsx' }: CodeBlockProps) {
  return (
    <pre className="p-4 rounded-md bg-muted overflow-x-auto">
      <code className={`font-code text-sm text-muted-foreground language-${language}`}>
        {children}
      </code>
    </pre>
  );
}
