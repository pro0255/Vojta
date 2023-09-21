export const getUrl = (rest: string) => {
  const BASE_URL = process.env.API_URL
  return `${BASE_URL}${rest}`
}
