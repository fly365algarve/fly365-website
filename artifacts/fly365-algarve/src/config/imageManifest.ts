type ImageAsset = { src: string; srcSet: string; width: number; height: number };

const originals = [
  { name: "fly365-c42-sunset-over-lagos.webp", width: 1600, height: 1666, sizes: [320, 640, 1024, 1600] },
  { name: "fly365-quik-r-two-people-over-sea.webp", width: 1600, height: 1440, sizes: [320, 640, 1024, 1600] },
  { name: "fly365-c42-ponta-da-piedade-sunset.webp", width: 1152, height: 2208, sizes: [320, 640, 1024, 1152] },
  { name: "fly365-c42-g-cisg-in-flight.webp", width: 1024, height: 683, sizes: [320, 640, 1024] },
  { name: "fly365-c42-g-cisg-by-hangar.webp", width: 1290, height: 2297, sizes: [320, 640, 1024, 1290] },
  { name: "fly365-flexwing-cockpit-orange-cliffs.webp", width: 795, height: 464, sizes: [320, 640, 795] },
  { name: "fly365-c42-fleet-airfield-lineup.webp", width: 960, height: 726, sizes: [320, 640, 960] },
  { name: "fly365-c42-fleet-red-striped-noses.webp", width: 720, height: 960, sizes: [320, 640, 720] },
  { name: "fly365-zeth-and-malcolm.webp", width: 1078, height: 1440, sizes: [320, 640, 1024, 1078] },
  { name: "fly365-flexwing-aircraft.png", width: 388, height: 439, sizes: [160, 320, 388] },
  { name: "ikarus-c42-fly365.jpg", width: 702, height: 468, sizes: [320, 640, 702] },
  { name: "logo.png", width: 192, height: 192, sizes: [96, 192] },
  { name: "ponta-da-piedade-clifftop.webp", width: 1600, height: 1200, sizes: [640, 1024, 1600] },
  { name: "lagos-balanca-beach-aerial.webp", width: 1600, height: 899, sizes: [640, 1024, 1600] },
  { name: "lagos-marina-boats.webp", width: 1600, height: 1068, sizes: [640, 1024, 1600] },
  { name: "cabo-sao-vicente-cliffs.webp", width: 1600, height: 2841, sizes: [640, 1024, 1600] },
  { name: "meia-praia-lagos-beach.webp", width: 1600, height: 1067, sizes: [640, 1024, 1600] },
  { name: "lagos-coastal-trial-flight.webp", width: 1600, height: 900, sizes: [640, 1024, 1600] },
  { name: "lagos-municipal-aerodrome-airfield.webp", width: 1600, height: 1200, sizes: [640, 1024, 1600] },
  { name: "weight-shift-microlight-aviation-history.webp", width: 1600, height: 1200, sizes: [640, 1024, 1600] },
];

export const imageManifest: Record<string, ImageAsset> = Object.fromEntries(
  originals.map(({ name, width, height, sizes }) => {
    const stem = name.replace(/\.[^.]+$/, "");
    return [`/images/${name}`, {
      src: `/images/${stem}-${width}.webp`,
      srcSet: sizes.map((size) => `/images/${stem}-${size}.webp ${size}w`).join(", "),
      width, height,
    }];
  }),
);
