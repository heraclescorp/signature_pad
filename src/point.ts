// Interface for point data structure used e.g. in SignaturePad#fromData method
export interface BasicPoint {
  x: number;
  y: number;
  time: number;
  pressure: number;
}

export class Point implements BasicPoint {
  public x: number;
  public y: number;
  public time: number;
  public pressure: number;

  constructor(x: number, y: number, time?: number, pressure?: number) {
    this.x = x
    this.y = y
    this.time = time || Date.now();
    this.pressure = pressure || 0
  }

  public distanceTo(start: BasicPoint): number {
    return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
  }

  public equals(other: BasicPoint): boolean {
    return this.x === other.x && this.y === other.y && this.time === other.time && this.pressure === other.pressure;
  }

  public velocityFrom(start: BasicPoint): number {
    return (this.time !== start.time) ? this.distanceTo(start) / (this.time - start.time) : 0;
  }
}
