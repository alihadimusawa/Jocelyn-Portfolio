import Link from "next/link";
import { person } from "@/app/data/portfolio";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand-logo" href="/" aria-label={`${person.name} — home`}>
      <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
        <path className="logo-j" d="M30 9v29c0 10-5 15-13 15C9 53 4 49 4 41" />
        <circle className="logo-q" cx="42" cy="31" r="18" />
        <path className="logo-tail" d="m53 44 8 8" />
      </svg>
      {!compact && (
        <span>
          {person.name}
          <small>{person.role}</small>
        </span>
      )}
    </Link>
  );
}
