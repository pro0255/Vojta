import { HEADERS } from '@/fetcher/utils/HEADERS'
import { getUrl } from '@/fetcher/utils/getUrl'

export const resetConversation = () => {
  return fetch(getUrl('/reset-conversation'), {
    headers: HEADERS,
    credentials: 'include',
    method: 'PUT',
  })
}
