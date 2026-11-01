import { site } from "./site";

export type MapCoordinate = [longitude: number, latitude: number];

// APPROXIMATE – TO BE REPLACED WITH GPX TRACKS
export const routePlaces = [
  { name: "Lagos Aerodrome", position: [site.aerodrome.lng, site.aerodrome.lat] as MapCoordinate, kind: "aerodrome" },
  { name: "Ponta da Piedade / the grottos", position: [-8.6697, 37.0816] as MapCoordinate },
  { name: "Salema", position: [-8.8247, 37.0647] as MapCoordinate },
  { name: "Sagres", position: [-8.9403, 37.0086] as MapCoordinate },
  { name: "Cabo de São Vicente", position: [-8.9965, 37.0230] as MapCoordinate },
] as const;

const airport = routePlaces[0].position;

// Shore landmarks retain their supplied positions; turns sit just offshore of
// them so the illustrative flight lines do not cut across the headlands.
const coastToGrottos: MapCoordinate[] = [
  airport,
  [-8.675, 37.117], [-8.667, 37.110], [-8.658, 37.103],
  [-8.653, 37.096], [-8.654, 37.088], [-8.660, 37.081],
  [-8.6697, 37.0758],
];
const coastToSalema: MapCoordinate[] = [
  ...coastToGrottos,
  [-8.682, 37.075], [-8.696, 37.075], [-8.710, 37.076],
  [-8.725, 37.075], [-8.739, 37.075], [-8.752, 37.071],
  [-8.765, 37.067], [-8.778, 37.064], [-8.792, 37.060],
  [-8.808, 37.058], [-8.8247, 37.060],
];
const coastToSagres: MapCoordinate[] = [
  ...coastToSalema,
  [-8.838, 37.055], [-8.850, 37.047], [-8.862, 37.038],
  [-8.874, 37.032], [-8.887, 37.026], [-8.900, 37.023],
  [-8.913, 37.018], [-8.925, 37.010], [-8.935, 37.001],
];
const coastToCabo: MapCoordinate[] = [
  ...coastToSagres,
  [-8.939, 36.997], [-8.949, 36.994], [-8.960, 36.998],
  [-8.972, 37.005], [-8.985, 37.011], [-8.997, 37.016],
  [-9.002, 37.023],
];

// Distinct inbound corridor, roughly 1 km seaward of the outbound track.
// Both bay crossings join only at the runway, not along the coastline.
const bayReturn: MapCoordinate[] = [
  [-8.665, 37.066], [-8.650, 37.070], [-8.640, 37.083],
  [-8.638, 37.095], [-8.645, 37.104], [-8.656, 37.112],
  [-8.671, 37.119], airport,
];
const salemaReturn: MapCoordinate[] = [
  [-8.826, 37.049], [-8.805, 37.049], [-8.782, 37.055],
  [-8.758, 37.062], [-8.732, 37.066], [-8.710, 37.063],
  [-8.687, 37.062], ...bayReturn,
];
const sagresReturn: MapCoordinate[] = [
  [-8.924, 36.997], [-8.909, 37.009], [-8.890, 37.020],
  [-8.870, 37.030], [-8.850, 37.041], ...salemaReturn,
];
const caboReturn: MapCoordinate[] = [
  [-9.013, 37.020], [-9.011, 37.007], [-9.000, 36.995],
  [-8.981, 36.985], [-8.960, 36.983], [-8.940, 36.988],
  ...sagresReturn,
];

const loops: MapCoordinate[][] = [
  [...coastToGrottos, ...bayReturn],
  [...coastToSalema, ...salemaReturn],
  [...coastToSagres, ...sagresReturn],
  [...coastToCabo, ...caboReturn],
];

// Add a real video file URL here when available; empty entries render no slot.
export const routeVideos: Partial<Record<number, { src: string; poster?: string }>> = {};

export const trialRoutes = site.trialFlights.map((flight, index) => ({
  ...flight,
  coordinates: loops[index],
  video: routeVideos[flight.minutes],
}));
