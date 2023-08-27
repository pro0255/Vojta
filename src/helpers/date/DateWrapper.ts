import { format as dateFnsFormat } from 'date-fns'
import { DateFormat } from '@/helpers'

export class DateWrapper {
  constructor() {}

  now = () => {
    return new Date().getMilliseconds()
  }

  format = (dateValue: number | Date) => {
    if (dateValue instanceof Date) {
      return dateFnsFormat(dateValue, DateFormat.localized)
    }

    return `${dateValue}`
  }
}
