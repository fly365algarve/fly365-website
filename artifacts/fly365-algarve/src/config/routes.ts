import { site } from "./site";

export type MapCoordinate = [longitude: number, latitude: number];

// APPROXIMATE – TO BE REPLACED WITH GPX TRACKS
export const routePlaces = [
  { name: "Lagos Aerodrome", position: [-8.6447, 37.1206] as MapCoordinate, kind: "aerodrome" },
  { name: "Ponta da Piedade / the grottos", position: [-8.6697, 37.0816] as MapCoordinate },
  { name: "Salema", position: [-8.8247, 37.0647] as MapCoordinate },
  { name: "Sagres", position: [-8.9403, 37.0086] as MapCoordinate },
  { name: "Cabo de São Vicente", position: [-8.9965, 37.023] as MapCoordinate },
] as const;

const airport = routePlaces[0].position;
const grottos = routePlaces[1].position;
const salema = routePlaces[2].position;
const sagres = routePlaces[3].position;
const cabo = routePlaces[4].position;

// These unlabelled points keep the illustrative tracks offshore and smooth.
const coastToGrottos: MapCoordinate[] = [
  airport,
  [-8.649, 37.113],
  [-8.657, 37.101],
  [-8.664, 37.091],
  grottos,
];
const coastToSalema: MapCoordinate[] = [
  ...coastToGrottos,
  [-8.704, 37.075],
  [-8.746, 37.07],
  [-8.785, 37.067],
  salema,
];
const coastToSagres: MapCoordinate[] = [
  ...coastToSalema,
  [-8.852, 37.055],
  [-8.883, 37.04],
  [-8.914, 37.023],
  sagres,
];
const coastToCabo: MapCoordinate[] = [
  ...coastToSagres,
  [-8.959, 37.01],
  [-8.98, 37.014],
  cabo,
];
const westCoastWaypoint: MapCoordinate = [-9.005, 37.046];

function returnAlong(outbound: MapCoordinate[]) {
  return [...outbound, ...outbound.slice(0, -1).reverse()];
}

// Add a real video file URL here when available; empty entries render no slot.
export const routeVideos: Partial<Record<number, { src: string; poster?: string }>> = {};

export const trialRoutes = site.trialFlights.map((flight, index) => {
  const outbound = [
    coastToGrottos,
    coastToSalema,
    coastToSagres,
    [...coastToCabo, westCoastWaypoint],
  ][index];

  return {
    ...flight,
    coordinates: returnAlong(outbound),
    video: routeVideos[flight.minutes],
  };
});
