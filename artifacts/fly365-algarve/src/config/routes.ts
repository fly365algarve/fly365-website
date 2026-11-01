import { site } from "./site";

export type MapCoordinate = [longitude: number, latitude: number];

// APPROXIMATE – TO BE REPLACED WITH GPX TRACKS
export const routePlaces = [
  { name: "Lagos Aerodrome", position: [site.aerodrome.lng, site.aerodrome.lat] as MapCoordinate, kind: "aerodrome" },
  { name: "Ponta da Piedade / the grottos", position: [-8.6697, 37.0816] as MapCoordinate },
  { name: "Salema", position: [-8.8247, 37.0647] as MapCoordinate },
  { name: "Sagres", position: [-8.9403, 37.0086] as MapCoordinate },
  { name: "Cabo de São Vicente", position: [-8.9965, 37.0230] as MapCoordinate },
  { name: "Barragem da Bravura", position: [-8.707, 37.205] as MapCoordinate },
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

// The short loop returns over the old town and marina, west of the bay departure.
const lagosReturn: MapCoordinate[] = [
  [-8.675, 37.077], [-8.679, 37.082], [-8.679, 37.088],
  [-8.677, 37.094], [-8.674, 37.100], [-8.672, 37.105],
  [-8.673, 37.110], [-8.675, 37.115], [-8.678, 37.119], airport,
];

// Inland returns keep the loops compact instead of retracing the coastal leg.
// Only the 45-minute route visits Bravura; the Cape loop returns via Vila do Bispo.
const bravura = routePlaces[5].position;
const luzLoop: MapCoordinate[] = [
  ...coastToGrottos,
  [-8.682, 37.075], [-8.696, 37.075], [-8.710, 37.076],
  [-8.719, 37.079], [-8.725, 37.083], [-8.727, 37.087],
  [-8.730, 37.096], [-8.733, 37.106], [-8.735, 37.116],
  [-8.736, 37.126], [-8.736, 37.136], [-8.735, 37.146],
  [-8.735, 37.155], // Bensafrim
  [-8.727, 37.155], [-8.719, 37.152], [-8.711, 37.148],
  [-8.703, 37.143], [-8.696, 37.138], [-8.689, 37.132],
  [-8.683, 37.126], airport,
];
const reservoirReturn: MapCoordinate[] = [
  bravura, [-8.700, 37.204], [-8.695, 37.200], [-8.690, 37.194],
  [-8.687, 37.187], [-8.684, 37.179], [-8.682, 37.170],
  [-8.681, 37.160], [-8.681, 37.151], [-8.680, 37.142],
  [-8.680, 37.134], [-8.6795, 37.128], airport,
];
const salemaReturn: MapCoordinate[] = [
  routePlaces[2].position, [-8.826, 37.073], [-8.826, 37.081],
  [-8.824, 37.090], [-8.820, 37.099], [-8.814, 37.108],
  [-8.808, 37.117], [-8.800, 37.126], [-8.791, 37.135],
  [-8.782, 37.144], [-8.771, 37.154], [-8.759, 37.163],
  [-8.747, 37.174], [-8.735, 37.185], [-8.725, 37.194],
  [-8.717, 37.200], ...reservoirReturn,
];
const caboReturn: MapCoordinate[] = [
  routePlaces[4].position, [-8.990, 37.030], [-8.981, 37.037],
  [-8.971, 37.045], [-8.961, 37.053], [-8.949, 37.061],
  [-8.937, 37.069], [-8.925, 37.077], [-8.912, 37.083],
  [-8.900, 37.087], [-8.886, 37.091], [-8.871, 37.095],
  [-8.855, 37.099], [-8.839, 37.103], [-8.823, 37.107],
  [-8.807, 37.111], [-8.791, 37.115], [-8.775, 37.118],
  [-8.759, 37.121], [-8.743, 37.123], [-8.727, 37.125],
  [-8.712, 37.126], [-8.698, 37.126], [-8.687, 37.125], airport,
];

const loops: MapCoordinate[][] = [
  [...coastToGrottos, ...lagosReturn],
  luzLoop,
  [...coastToSalema, ...salemaReturn],
  [...coastToCabo, ...caboReturn],
];

// Add a real video file URL here when available; empty entries render no slot.
export const routeVideos: Partial<Record<number, { src: string; poster?: string }>> = {};

export const trialRoutes = site.trialFlights.map((flight, index) => ({
  ...flight,
  coordinates: loops[index],
  video: routeVideos[flight.minutes],
}));
