import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Merge Tailwind classes with clsx and twMerge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format large numbers with K/M/B suffixes
export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B'
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// Generate a random ID
export function generateId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

// Format date to relative time (e.g., "2 days ago")
export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  const minute = 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const year = day * 365
  
  if (diffInSeconds < minute) return 'just now'
  if (diffInSeconds < hour) {
    const minutes = Math.floor(diffInSeconds / minute)
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
  }
  if (diffInSeconds < day) {
    const hours = Math.floor(diffInSeconds / hour)
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
  }
  if (diffInSeconds < month) {
    const days = Math.floor(diffInSeconds / day)
    return `${days} ${days === 1 ? 'day' : 'days'} ago`
  }
  if (diffInSeconds < year) {
    const months = Math.floor(diffInSeconds / month)
    return `${months} ${months === 1 ? 'month' : 'months'} ago`
  }
  
  const years = Math.floor(diffInSeconds / year)
  return `${years} ${years === 1 ? 'year' : 'years'} ago`
}

// Truncate text with ellipsis
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '…'
}

// Check if the code is running in the browser
export const isBrowser = typeof window !== 'undefined'

// Get a cookie value by name
export function getCookie(name: string): string | null {
  if (!isBrowser) return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

// Set a cookie
export function setCookie(
  name: string, 
  value: string, 
  days: number = 365
): void {
  if (!isBrowser) return
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/`
}

// Remove a cookie
export function removeCookie(name: string): void {
  if (!isBrowser) return
  document.cookie = `${name}=; Max-Age=-99999999; path=/`
}

// Generate a random color in hex format
export function getRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
}

// Copy text to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!isBrowser) return false
  
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy text: ', err)
    return false
  }
}
