import { HEADERS } from '@/fetcher/constants/HEADERS'
import { getUrl } from '@/fetcher/utils/getUrl'

export const ask = (message: string) => {
  try {
    return fetch(getUrl('/ask'), {
      headers: HEADERS,
      credentials: 'include',
      method: 'PUT',
      body: JSON.stringify({
        content: message,
      }),
    })
  } catch (e) {
    console.log(e)
  }
}
