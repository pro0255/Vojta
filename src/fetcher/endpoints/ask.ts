import { HEADERS } from '@/fetcher/constants/HEADERS'
import { getUrl } from '@/fetcher/utils/getUrl'

export const ask = (message: string) => {
  return fetch(getUrl('/ask'), {
    headers: HEADERS,
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify({
      content: message,
    }),
  })
}
