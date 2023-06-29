export interface MetaData {
  request: MetaRequest
  // на будущее пускай побудет тут any
  // eslint-disable-next-line
  response: any;
}
interface MetaRequest {
  url: string
}
