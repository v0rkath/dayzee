import { LatLngExpression } from "leaflet";

function getMinMax(coords: LatLngExpression[], key: number): number[] {
  const values = coords
    .map((coord) => coord[key as keyof LatLngExpression])
    .sort((a, b) => a - b);
  console.log(`values: ${values}`);
  return [values[0], values[values.length - 1] - values[0]];
}

export function findCenter(coords: LatLngExpression[]): LatLngExpression {
  const lats = getMinMax(coords, 0);
  const longs = getMinMax(coords, 1);

  return [lats[0] + lats[1] / 2, longs[0] + longs[1] / 2];
}

export function generateZoomLevel(coords: LatLngExpression[]): number {
  const latDiff = getMinMax(coords, 0);
  const longDiff = getMinMax(coords, 1);
  console.log(`latDiff: ${latDiff[1]} | longDiff: ${longDiff[1]}`);

  if (
    (latDiff[1] > 1680 && latDiff[1] < 3360) ||
    (longDiff[1] > 720 && longDiff[1] < 2500)
  ) {
    console.log("returning -2");
    return -2;
  }

  if (
    (latDiff[1] > 840 && latDiff[1] < 1680) ||
    (longDiff[1] > 360 && longDiff[1] < 720)
  ) {
    console.log("returning -1");
    return -1;
  }

  return 0;
}
