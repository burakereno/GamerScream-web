"use client"

import { useState } from "react"

export function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false)

    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(text)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            }}
            className="shrink-0 px-2 py-1 rounded-md text-xs font-sans bg-white/[0.06] hover:bg-white/[0.12] text-text-muted hover:text-text-primary transition-all"
            title="Copy to clipboard"
        >
            {copied ? "✓ Copied" : "Copy"}
        </button>
    )
}
