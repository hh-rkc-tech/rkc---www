"use client";

import { useEffect } from "react";
import Link from "next/link";
import Typography from "@/components/atoms/Typography";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Error boundary for the entire app.
 * Catches runtime errors and provides a way to recover.
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-site">
      <div className="text-center max-w-md">
        <Typography variant="display-md" as="h1" className="mb-6">
          ERROR.
        </Typography>
        <p className="font-sans text-fg-faint text-sm leading-relaxed mb-8">
          Something went wrong. Our team has been notified.
          Please try again or return to the homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="font-sans text-xs tracking-widest uppercase bg-accent text-white px-6 py-3 hover:bg-accent-hover transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="font-sans text-xs tracking-widest uppercase border border-border text-fg-muted px-6 py-3 hover:border-border-strong transition-colors"
          >
            Go Home
          </Link>
        </div>
        {error.digest && (
          <p className="font-sans text-xs text-fg-ghost mt-8">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}