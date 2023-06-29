import { ICamera } from "./camera";
import { Rover } from "./rover";

export interface Photos {
  camera: ICamera;
  earth_date: string;
  id: number;
  img_src: string;
  rover: Rover
  sol: number;
}

