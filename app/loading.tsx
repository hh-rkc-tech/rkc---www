/**
 * Loading fallback for the entire app.
 * Shown while route segments are loading.
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-12 h-12 border-2 border-accent/20 rounded-full" />
          <div className="absolute inset-0 w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="font-sans text-xs tracking-widest uppercase text-fg-ghost animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}