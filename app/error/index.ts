export class HandledError extends Error {
  type = 'HandledError'
  errors: any
  status: number

  constructor (message, errors?: any, status: number = 400) {
    super(message)
    this.status = status
    this.errors = errors
  }
}
