export type Gun = {
  name: string;
  ammoType: string;
  weight: number;
  roundsPerMin: string;
  type: string;
  western: boolean;
  size: number[];
  image: string;
  damage?: {
    normal: number;
    plateCarrier: number;
    ballisticVest: number;
    policeVest: number;
    chestplate: number;
  };
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
    ammoType: ".308 Winchester",
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
  },
  {
    name: "AUR A1",
    ammoType: "5.56 x 45mm",
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
  },
  {
    name: "AUR AX",
    ammoType: "5.56 x 45mm",
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
  },
  {
    name: "KA-101",
    ammoType: "5.56 x 45mm",
    weight: 3,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
    image: "/images/KA-101.png",
  },
  {
    name: "KA-74",
    ammoType: "5.45 x 39mm",
    weight: 2,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
    image: "/images/KA-74.png",
  },
  {
    name: "KAS-74U",
    ammoType: "5.45 x 39mm",
    weight: 2,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [6, 3],
    image: "/images/KAS-74U.png",
  },
  {
    name: "KA-M",
    ammoType: "7.62 x 39mm",
    weight: 3,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
    image: "/images/KA-M.png",
  },
  {
    name: "LE-MAS",
    ammoType: "5.56 x 45mm",
    weight: 4,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [6, 3],
    image: "/images/LE-MAS.png",
  },
  {
    name: "M16-A2",
    ammoType: "5.56 x 45mm",
    weight: 4,
    roundsPerMin: "550 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [9, 3],
    image: "/images/M16-A2.png",
  },
  {
    name: "M4-A1",
    ammoType: "5.56 x 45mm",
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [8, 3],
    image: "/images/M4-A1.png",
  },
  {
    name: "SVAL",
    ammoType: "9 x 39mm",
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
    image: "/images/SVAL.png",
  },
  {
    name: "Vikhr",
    ammoType: "9 x 39mm",
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [6, 3],
    image: "/images/Vikhr.png",
  },
];
