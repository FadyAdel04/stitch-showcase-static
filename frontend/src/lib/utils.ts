import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to get the full image URL from backend
export function getImageUrl(imagePath: string): string {
  const backendUrl = 'http://localhost:5000';
  return `${backendUrl}${imagePath}`;
}
