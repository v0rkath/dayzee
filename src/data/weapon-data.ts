import { LatLngExpression } from "leaflet";

export type Gun = {
  name: string;
  className: string;
  ammoType: string[];
  weight: number;
  roundsPerMin: string;
  type: string;
  western: boolean;
  size: number[];
  image: string;
  damage: {
    normal: number;
    plateCarrier: number;
    ballisticVest: number;
    policeVest: number;
    chestplate: number;
  };
  locations: string[];
  markers?: LatLngExpression[];
};

// name: "",
// ammoType: "",
// weight: ,
// roundsPerMin: "",
// type: "Assault Rifle",
// western: ,

export const gunData: Gun[] = [
  {
    name: "LAR",
    className: "FAL",
    ammoType: [".308 Winchester"],
    weight: 4,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [8, 3],
    image: "/images/FAL.png",
    damage: {
      normal: 122.87,
      plateCarrier: 36.86,
      ballisticVest: 61.44,
      policeVest: 61.44,
      chestplate: 67.58,
    },
    locations: ["Contaminated Areas"],
    markers: [[50, -280], [1425, 1740]],
  },
  {
    name: "AUR A1",
    className: "AugShort",
    ammoType: ["5.56 x 45mm", "5.56 x 45mm Tracer"],
    weight: 3,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [6, 3],
    image: "/images/AUR-A1.png",
    damage: {
      normal: 91.35,
      plateCarrier: 27.41,
      ballisticVest: 45.68,
      policeVest: 45.68,
      chestplate: 50.24,
    },
    locations: ["Helicopter Crash Sites", "Military Convoys"]
  },
  {
    name: "AUR AX",
    className: "Aug",
    ammoType: ["5.56 x 45mm"],
    weight: 4,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [8, 3],
    image: "/images/AUR-AX.png",
    damage: {
      normal: 107.47,
      plateCarrier: 32.24,
      ballisticVest: 53.73,
      policeVest: 53.73,
      chestplate: 59.11,
    },
    locations: ["Contaminated Areas"]
  },
  {
    name: "KA-101",
    className: "AK101",
    ammoType: ["5.56 x 45mm"],
    weight: 3,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
    image: "/images/KA-101.png",
    damage: {
        normal: 96.72,
        plateCarrier: 29.02,
        ballisticVest: 48.36,
        policeVest: 48.36,
        chestplate: 53.20,
      },
      locations: ["Helicopter Crash Sites", "Military Convoys"]
  },
  {
    name: "KA-74",
    className: "AK74",
    ammoType: ["5.45 x 39mm"],
    weight: 2,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
    image: "/images/KA-74.png",
    damage: {
        normal: 80.50,
        plateCarrier: 24.15,
        ballisticVest: 40.25,
        policeVest: 40.25,
        chestplate: 44.28,
      },
      locations: ["Military (Tier 3)", "Military (Tier 4)"]
  },
  {
    name: "KAS-74U",
    className: "AKS74U",
    ammoType: ["5.45 x 39mm"],
    weight: 2,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [6, 3],
    image: "/images/KAS-74U.png",
    damage: {
        normal: 65.55,
        plateCarrier: 19.67,
        ballisticVest: 32.78,
        policeVest: 32.78,
        chestplate: 36.05,
      },
      locations: ["Military (Tier 3)"]
  },
  {
    name: "KA-M",
    className: "AKM",
    ammoType: ["7.62 x 39mm"],
    weight: 3,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
    image: "/images/KA-M.png",
    damage: {
        normal: 90.13,
        plateCarrier: 27.04,
        ballisticVest: 45.06,
        policeVest: 45.06,
        chestplate: 49.57,
      },
      locations: ["Military (Tier 4)"]
  },
  {
    name: "LE-MAS",
    className: "FAMAS",
    ammoType: ["5.56 x 45mm"],
    weight: 4,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [6, 3],
    image: "/images/LE-MAS.png",
    damage: {
        normal: 107.47,
        plateCarrier: 32.24,
        ballisticVest: 53.74,
        policeVest: 53.74,
        chestplate: 59.11,
      },
      locations: ["Helicopter Crash Sites", "Military Convoys"]
  },
  {
    name: "M16-A2",
    className: "M16A2",
    ammoType: ["5.56 x 45mm"],
    weight: 4,
    roundsPerMin: "550 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [9, 3],
    image: "/images/M16-A2.png",
    damage: {
        normal: 107.47,
        plateCarrier: 32.24,
        ballisticVest: 53.74,
        policeVest: 53.74,
        chestplate: 59.11,
      },
      locations: ["Military Crash Sites", "Military Convoys"]
  },
  {
    name: "M4-A1",
    className: "M4A1",
    ammoType: ["5.56 x 45mm"],
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [8, 3],
    image: "/images/M4-A1.png",
    damage: {
        normal: 96.72,
        plateCarrier: 29.02,
        ballisticVest: 48.36,
        policeVest: 48.36,
        chestplate: 53.20,
      },
      locations : ["Contaminated Areas"]
  },
  {
    name: "SVAL",
    className: "ASVAL",
    ammoType: ["9 x 39mm"],
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
    image: "/images/SVAL.png",
    damage: {
        normal: 75.00,
        plateCarrier: 22.50,
        ballisticVest: 37.50,
        policeVest: 37.50,
        chestplate: 41.25,
      },
      locations: ["Military (Tier 4)"]
  },
  {
    name: "Vikhr",
    className: "Vikhr",
    ammoType: ["9 x 39mm"],
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [6, 3],
    image: "/images/Vikhr.png",
    damage: {
        normal: 75.00,
        plateCarrier: 22.50,
        ballisticVest: 37.50,
        policeVest: 37.50,
        chestplate: 41.25,
      },
      locations: ["Military (Tier 3)", "Military (Tier 4)"]
  },
];
