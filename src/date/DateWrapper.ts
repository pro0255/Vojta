export class DateWrapper {
  constructor() {}

  now = () => {
    return new Date().getMilliseconds()
  }
}
