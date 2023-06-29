export const makeRequest = (data: {
  rover: string
  sol: string
  camera?: string
  page: string
}) => {
  return {
    rover: data.rover,
    sol: `=${data.sol}`,
    camera: data.camera ? `=${data.camera}` : '',
    page: `=${data.page}`,
  }
}
