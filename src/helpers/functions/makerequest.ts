import { dataRequest } from '../../types/request/dataRequest';

export const makeRequest = (data: {
  rover: string;
  sol: string;
  camera?: string;
  page: number;
}) => {
  return {
    rover: data.rover,
    sol: `=${data.sol}`,
    camera: data.camera ? `=${data.camera}` : '',
    page: `=${data.page}`,
  };
};
