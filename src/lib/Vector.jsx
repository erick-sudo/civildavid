export class Vector {
  constructor(i = 0, j = 0, k = 0) {
    this.i = i;
    this.j = j;
    this.k = k;
  }

  plus(fraction, origin) {
    return {
      x: fraction * this.i + origin.x,
      y: fraction * this.j + origin.y,
      z: fraction * this.k + origin.z,
    };
  }
}
