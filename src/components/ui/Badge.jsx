export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ${className}`}
    >
      {children}
    </span>
  );
}
