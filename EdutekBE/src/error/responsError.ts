export default class ResponsError extends Error {
  status: number;
  constructor(status: number, massage: string) {
    super(massage);
    this.status = status;
  }
}
