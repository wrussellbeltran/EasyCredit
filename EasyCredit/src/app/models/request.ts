/**
 * Modelo Request
 */
export class Request {
  constructor(
    public id: number,
    public user_id: number,
    public quantity: string,
    public dead_line: string,
    public card: boolean,
    public age: string,
    public total: number,
    public status: number
  ) {}
}