import { HEADERS } from '@/fetcher/constants/HEADERS'
import { getUrl } from '@/fetcher/utils/getUrl'

export const resetConversation = () => {
  return fetch(getUrl('reset-conversation'), {
    headers: HEADERS,
    method: 'PUT',
  })
}
