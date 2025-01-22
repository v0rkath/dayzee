import { LatLngExpression } from "leaflet";

export function findCenter(coords: LatLngExpression[]): LatLngExpression {
    const lats = coords.map((lat) => lat[0 as keyof object]).sort((a, b) => a - b)
    const longs = coords.map((long) => long[0 as keyof object]).sort((a, b) => a - b)
    console.log(`lats: ${lats} | longs: ${longs}`)

    const latCenter = (lats[lats.length - 1] - lats[0]) / 2 + lats[0];
    const longCenter = (longs[longs.length - 1] - longs[0]) / 2 + longs[0];

    return [latCenter, longCenter];
}