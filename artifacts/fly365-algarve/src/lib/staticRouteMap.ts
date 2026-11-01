import { routePlaces, type MapCoordinate } from "../config/routes";
import { site } from "../config/site";

export const aerodromeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${site.aerodrome.lat.toFixed(6)},${site.aerodrome.lng.toFixed(6)}`;
export const staticMapSizes = {
  desktop: { width: 1000, height: 600 },
  mobile: { width: 480, height: 420 },
} as const;

// Google's encoded-polyline format uses latitude first, at five-decimal precision.
export function encodeRoutePolyline(coordinates: MapCoordinate[]) {
  let previousLatitude = 0;
  let previousLongitude = 0;
  const encode = (delta: number) => {
    let value = delta < 0 ? ~(delta << 1) : delta << 1;
    let output = "";
    while (value >= 0x20) {
      output += String.fromCharCode((0x20 | (value & 0x1f)) + 63);
      value >>>= 5;
    }
    return output + String.fromCharCode(value + 63);
  };
  return coordinates.map(([longitude, latitude]) => {
    const lat = Math.round(latitude * 1e5);
    const lng = Math.round(longitude * 1e5);
    const encoded = encode(lat - previousLatitude) + encode(lng - previousLongitude);
    previousLatitude = lat;
    previousLongitude = lng;
    return encoded;
  }).join("");
}

const project = ([longitude, latitude]: MapCoordinate) => {
  const sine = Math.sin(latitude * Math.PI / 180);
  return [(longitude + 180) / 360, 0.5 - Math.log((1 + sine) / (1 - sine)) / (4 * Math.PI)];
};

export function staticRouteMap(coordinates: MapCoordinate[], size: keyof typeof staticMapSizes, token: string) {
  const { width, height } = staticMapSizes[size];
  const projected = [...coordinates, ...routePlaces.map(place => place.position)].map(project);
  const xs = projected.map(point => point[0]);
  const ys = projected.map(point => point[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const centerX = (minX + maxX) / 2, centerY = (minY + maxY) / 2;
  const zoom = Math.floor(Math.min(
    Math.log2((width - 110) / (512 * (maxX - minX))),
    Math.log2((height - 120) / (512 * (maxY - minY))),
  ) * 1000) / 1000;
  const longitude = centerX * 360 - 180;
  const latitude = Math.atan(Math.sinh(Math.PI * (1 - 2 * centerY))) * 180 / Math.PI;
  const camera = `${longitude.toFixed(6)},${latitude.toFixed(6)},${zoom},0,0`;
  const pins = routePlaces.map((place, index) =>
    `pin-s-${["a", "p", "l", "s", "c", "b", "r"][index]}+C8692F(${place.position.join(",")})`);
  const path = `path-4+C8692F-1(${encodeURIComponent(encodeRoutePolyline(coordinates))})`;
  const airport = project(routePlaces[0].position);
  const worldSize = 512 * 2 ** zoom;
  return {
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${[path, ...pins].join(",")}/${camera}/${width}x${height}@2x?access_token=${encodeURIComponent(token)}`,
    airport: {
      left: `${50 + (airport[0] - centerX) * worldSize / width * 100}%`,
      top: `${50 + (airport[1] - centerY) * worldSize / height * 100}%`,
    },
  };
}
