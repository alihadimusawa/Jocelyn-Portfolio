export function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span>{index}</span>
      {children}
    </p>
  );
}
