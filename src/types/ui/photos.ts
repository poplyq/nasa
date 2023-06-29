import { Camera } from "./camera";
import { Rover } from "./rover";

export interface Photos {
  camera: Camera;
  earth_date: string;
  id: number;
  img_src: string;
  rover: Rover
  sol: number;
}

