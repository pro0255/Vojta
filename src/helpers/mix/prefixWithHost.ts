'use client'

export const prefixWithHost = (text: string) => {
  if (typeof window === 'undefined') {
    return text
  }
  const host = window.location.href
  return `${host}${text}`
}
