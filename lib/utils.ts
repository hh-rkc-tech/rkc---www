/**
 * Merges class names — lightweight alternative to clsx/tailwind-merge.
 * Filters out falsy values and joins with a space.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}