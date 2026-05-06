import { NexusMark } from "./NexusMark";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Nexus home">
      <NexusMark className="h-6 w-6" />
      <span className="text-lg font-semibold tracking-tight">
        nexus<span className="text-[color:var(--signal)]">.</span>
      </span>
    </a>
  );
}
