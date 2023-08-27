export class DateWrapper {
  constructor() {}

  now = () => {
    return new Date().getMilliseconds()
  }

  format = (dateValue: number | Date) => {
    if (dateValue instanceof Date) {
      return `${dateValue.toDateString()}`
    }

    return `${dateValue}`
  }
}
