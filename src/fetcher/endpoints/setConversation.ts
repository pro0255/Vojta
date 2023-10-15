import { HEADERS } from '@/fetcher/utils/HEADERS'
import { getUrl } from '@/fetcher/utils/getUrl'
import { HistoryMessage } from '@/fetcher/types'

export const setConversation = (history: Array<HistoryMessage>) => {
  return fetch(getUrl('/set-conversation'), {
    headers: HEADERS,
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify(history),
  })
}
