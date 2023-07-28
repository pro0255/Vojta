export class DateWrapper {
  constructor() {}

  now = () => {
    return new Date().getMilliseconds()
  }

  format = (timestamp: number) => {
    return `${timestamp}`
  }
}
