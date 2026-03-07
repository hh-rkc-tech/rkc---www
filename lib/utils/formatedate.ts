export function formatPublishedDate(dateString: string) {
  const date = new Date(dateString);

  // 1. Fail Fast: Never display fake or NaN dates if the CMS sends bad data
  if (isNaN(date.getTime())) {
    return 'Date unavailable';
  }

  // 2. The Native Intl API
  // You have granular control over exactly how the month, day, and year appear
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',   // e.g., "February"
    day: 'numeric',  // e.g., "25"
    year: 'numeric', // e.g., "2026"
  }).format(date);
}