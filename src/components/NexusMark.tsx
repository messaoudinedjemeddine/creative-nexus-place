type Props = { className?: string; accent?: boolean };

export function NexusMark({ className, accent = false }: Props) {
  const stroke = accent ? "var(--signal)" : "currentColor";
  const fill = accent ? "var(--signal)" : "currentColor";
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke={stroke} strokeWidth={6} aria-hidden>
      <rect x="14" y="14" width="48" height="48" />
      <rect x="38" y="38" width="48" height="48" fill={fill} stroke="none" />
    </svg>
  );
}
