export const FLIGHT_DURATION_MS = 30_000;

export const easeFlightProgress = (progress: number) =>
  progress * progress * (3 - 2 * progress);

export const smoothFlightBearing = (current: number, target: number, seconds: number) => {
  const shortestTurn = (((target - current + 180) % 360) + 360) % 360 - 180;
  return current + shortestTurn * (1 - Math.exp(-seconds / 0.65));
};
