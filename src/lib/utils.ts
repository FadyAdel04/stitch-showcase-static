import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to get the full image URL from public folder
export function getImageUrl(imagePath: string): string {
  // Return the path as-is since images are now in public folder
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
}
