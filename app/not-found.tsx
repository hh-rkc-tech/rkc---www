import Link from "next/link";
import Typography from "@/components/atoms/Typography";

/**
 * Custom 404 page for the entire app.
 * Rendered when a route is not found.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-site">
      <div className="text-center max-w-md">
        <Typography variant="display-md" as="h1" className="mb-6">
          404.
        </Typography>
        <p className="font-sans text-fg-faint text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="font-sans text-xs tracking-widest uppercase bg-accent text-white px-6 py-3 hover:bg-accent-hover transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="font-sans text-xs tracking-widest uppercase border border-border text-fg-muted px-6 py-3 hover:border-border-strong transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}