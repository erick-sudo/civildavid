import { Vector } from "./Vector";


export class Point {
    constructor(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    vectorTo(to) {
      return new Vector(to.x - this.x, to.y - this.y);
    }
  }