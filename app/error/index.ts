/**
 * 可控的error
 */
export class HandledError extends Error {
  type = 'HandledError'
  errors: any
  status: number

  constructor (message: string, status: number = 400, errors?: any) {
    super(message)
    this.status = status
    this.errors = errors
  }
}
