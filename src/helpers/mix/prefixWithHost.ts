export const prefixWithHost = (text: string) => {
  const host = window.location.href
  return `${host}${text}`
}
