import { useCallback, useRef, useState } from 'react';

interface CodeBlockProps {
  code: string;
  /** Accessible label describing what the snippet contains. */
  label?: string;
}

/** The copy button label is intentionally always English, regardless of UI language. */
const COPY_LABEL = 'Copy';
const COPIED_LABEL = 'Copied';

/**
 * A left-to-right code surface with a copy-to-clipboard button.
 * Code always renders LTR regardless of the UI language direction.
 */
export function CodeBlock({ code, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context); fail silently.
    }
  }, [code]);

  return (
    <div className="code-block">
      <button
        type="button"
        className="code-block__copy"
        onClick={handleCopy}
        aria-label={copied ? COPIED_LABEL : COPY_LABEL}
      >
        {copied ? COPIED_LABEL : COPY_LABEL}
      </button>
      <pre className="code-block__pre" aria-label={label}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
