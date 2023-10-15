'use client'

export const prefixWithHost = (text: string) => {
  if (!window) {
    return text
  }
  const host = window.location.href
  return `${host}${text}`
}
