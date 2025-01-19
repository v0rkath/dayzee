import { LatLngExpression, LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

export default function Map({posix, zoom}: MapProps) {
    return (
        <MapContainer className="mt-9" center={posix} zoom={zoom} style={{ height: "400px", width: "840px" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}