import { ICamera } from "./camera";
import { IRover } from "./rover";

export interface IPhotos {
  camera: ICamera;
  earth_date: string;
  id: number;
  img_src: string;
  rover: IRover
  sol: number;
}

