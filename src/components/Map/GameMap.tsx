import {
    CRS,
    LatLngBoundsExpression,
    LatLngExpression,
    LatLngTuple,
  } from "leaflet";
  import { ImageOverlay, MapContainer, Marker } from "react-leaflet";
  
  import "leaflet/dist/leaflet.css";
  import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
  import "leaflet-defaulticon-compatibility";
  
  interface MapProps {
    posix: LatLngExpression | LatLngTuple;
    zoom: number;
    bounds: LatLngBoundsExpression;
    locations: LatLngExpression[];
  }
  
  export default function Map({ posix, zoom, bounds, locations }: MapProps) {
    const markers = locations.map((item, index) => (
      <Marker key={index} position={item}></Marker>
    ));
  
    return (
      <MapContainer
        className="mt-9"
        center={posix}
        zoom={zoom}
        crs={CRS.Simple}
        minZoom={-2}
        maxBounds={bounds}
        style={{ height: "400px", width: "840px", background: "#0a0d11" }}
      >
        <ImageOverlay url="/images/chernarus-map.jpeg" bounds={bounds} />
        {markers}
      </MapContainer>
    );
  }
  