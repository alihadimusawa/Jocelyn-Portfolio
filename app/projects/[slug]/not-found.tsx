import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <span>404</span>
      <h1>Project not found.</h1>
      <Link href="/#projects">← Back to projects</Link>
    </main>
  );
}
